/* =========================================================
   // ЗДЕСЬ МЕНЯТЬ КОНТЕНТ
   Всё, что нужно поправить под себя, — только в этом блоке.
   ========================================================= */

// Текст письма: каждый элемент массива — отдельный абзац
const LETTER = [
  "Тимофей Сергеевич, Тимоха, Кузя, Кузьма, тренер — тебя можно назвать по-разному, но для меня ты брат. Родной мой братишка, хочу поздравить тебя с днём рождения.",
  "24 года — это сильно, учитывая, что в моей памяти ты так и остался беззаботным подростком. Но на самом деле это возраст, когда нужно творить, кайфовать, веселиться и жить свою лучшую жизнь.",
  "Хочу пожелать тебе больших успехов в работе, учёбе, спорте и во всём остальном. У тебя уже неплохо получается. Желаю огромного здоровья — хотя ты и так здоровее всех. И также хочу пожелать тебе чаще видеться: со мной, Никитой, родителями и с остальной роднёй. Мне правда важно проводить с тобой время, я это ценю.",
  "Хочу поблагодарить тебя за моё детство: ты активно в нём участвовал, и самые яркие воспоминания у меня связаны с тобой. Я очень рад, что родился с тобой в одной семье.",
];

// Подпись в конце письма
const SIGNATURE = "твой брат";

// Фотографии таймлайна: просто список файлов из папки photos/,
// сверху вниз в том порядке, в каком они идут на странице.
// Фотографий может быть сколько угодно — добавь или убери строки,
// полароидов станет ровно столько же. Формат каждой карточки
// подстраивается под саму фотографию, обрезать ничего не нужно.
// Числа рядом — размеры файла в пикселях. Они нужны, чтобы страница
// не дёргалась, пока фото грузится. Если добавишь своё фото и размеров
// не знаешь, просто напиши путь строкой: "photos/13.jpg" — формат
// подставится сам, когда фото загрузится.
const PHOTOS = [
  { src: "photos/01.jpg", w: 1200, h: 901 },   // 2006, с мечом у телевизора
  { src: "photos/02.jpg", w: 1179, h: 884 },   // на лавочке с обезьянами
  { src: "photos/03.jpg", w: 1200, h: 900 },   // на золотом быке
  { src: "photos/04.jpg", w: 1179, h: 884 },   // всей семьёй в машине
  { src: "photos/05.jpg", w: 1179, h: 884 },   // в озёрной грязи
  { src: "photos/06.jpg", w: 1024, h: 770 },   // с мамой и цветами
  { src: "photos/07.jpg", w: 902,  h: 1200 },  // вдвоём дурачитесь
  { src: "photos/08.jpg", w: 900,  h: 1200 },  // на скале
  { src: "photos/09.jpg", w: 728,  h: 1200 },  // на пляже
  { src: "photos/10.jpg", w: 900,  h: 1200 },  // в зале
  { src: "photos/11.jpg", w: 900,  h: 1200 },  // в Спасе на Крови
  { src: "photos/12.jpg", w: 1200, h: 900 },   // в масках для плавания
];

// Крупная фраза на последнем экране
const FINAL_WISH = "С днём рождения, брат!";

/* =========================================================
   Дальше — логика. Трогать не обязательно.
   ========================================================= */

// Настройки анимаций (мс)
const PARAGRAPH_DELAY = 400;     // пауза между абзацами письма
const CONFETTI_COUNT = 120;      // количество кусочков конфетти
const CONFETTI_DURATION = 4000;  // длительность конфетти

// Пользователь просит меньше движения?
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const prefersReducedMotion = () => reducedMotionQuery.matches;

// Элементы страницы
const envelopeScreen = document.getElementById("envelope-screen");
const envelopeButton = document.getElementById("envelope");
const album = document.getElementById("album");
const letter = document.getElementById("letter");
const letterText = document.getElementById("letter-text");
const letterSignature = document.getElementById("letter-signature");
const scrollArrow = document.getElementById("scroll-arrow");
const timelineSection = document.getElementById("timeline");
const timelineLine = document.getElementById("timeline-line");
const timelineList = document.getElementById("timeline-list");
const finaleSection = document.getElementById("finale");
const finaleWish = document.getElementById("finale-wish");
const restartButton = document.getElementById("restart");
const confettiCanvas = document.getElementById("confetti");

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const randomBetween = (min, max) => min + Math.random() * (max - min);

/* ---------------------------------------------------------
   Наполнение страницы контентом
   --------------------------------------------------------- */
function renderContent() {
  finaleWish.textContent = FINAL_WISH;
  letterSignature.textContent = SIGNATURE;

  // Абзацы письма — с нарастающей задержкой появления
  LETTER.forEach((paragraphText, index) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = paragraphText;
    paragraph.style.transitionDelay = `${index * PARAGRAPH_DELAY}ms`;
    letterText.appendChild(paragraph);
  });
  letterSignature.style.transitionDelay = `${LETTER.length * PARAGRAPH_DELAY}ms`;

  // Полароиды таймлайна
  const fragment = document.createDocumentFragment();
  PHOTOS.forEach((photo) => {
    fragment.appendChild(createPolaroid(photo));
  });
  timelineList.appendChild(fragment);
}

function createPolaroid(photoEntry) {
  // Путь можно задать строкой или объектом с размерами
  const photo = typeof photoEntry === "string" ? { src: photoEntry } : photoEntry;

  const item = document.createElement("li");
  item.className = "timeline__item";

  const card = document.createElement("div");
  card.className = "polaroid";
  // Случайный наклон карточки и скотча
  card.style.setProperty("--tilt", `${randomBetween(-3, 3).toFixed(2)}deg`);
  card.style.setProperty("--tape-tilt", `${randomBetween(-6, 6).toFixed(2)}deg`);

  const photoFrame = document.createElement("div");
  photoFrame.className = "polaroid__photo";
  // Карточка принимает форму самой фотографии — ничего не обрезается
  if (photo.w && photo.h) {
    photoFrame.style.aspectRatio = `${photo.w} / ${photo.h}`;
  }

  const image = document.createElement("img");
  image.src = photo.src;
  image.alt = "";            // фото без подписи — для читалок экрана это оформление
  image.loading = "lazy";
  image.decoding = "async";
  if (photo.w && photo.h) {
    image.width = photo.w;
    image.height = photo.h;
  }
  // Размеры не указали — берём их у самой фотографии, когда она загрузится
  image.addEventListener("load", () => {
    if (image.naturalWidth && image.naturalHeight) {
      photoFrame.style.aspectRatio = `${image.naturalWidth} / ${image.naturalHeight}`;
    }
  });
  // Нет файла — остаётся бумажная заливка с подписью «здесь будет фото»
  image.addEventListener("error", () => photoFrame.classList.add("is-missing"));
  photoFrame.appendChild(image);

  card.appendChild(photoFrame);
  item.appendChild(card);
  return item;
}

/* ---------------------------------------------------------
   Открытие конверта
   --------------------------------------------------------- */
let isAnimating = false;

async function openEnvelope() {
  if (isAnimating) return;
  isAnimating = true;

  if (prefersReducedMotion()) {
    // Простой fade без движения
    envelopeScreen.classList.add("is-faded");
    await wait(400);
  } else {
    envelopeScreen.classList.add("is-opening");      // клапан отгибается
    await wait(700);
    envelopeScreen.classList.add("is-letter-out");   // письмо выезжает
    await wait(400);
    envelopeScreen.classList.add("is-leaving");      // конверт уходит вниз
    await wait(500);
  }

  showAlbum();
  isAnimating = false;
}

function showAlbum() {
  envelopeScreen.hidden = true;
  album.hidden = false;
  document.body.classList.remove("is-locked");
  window.scrollTo(0, 0);

  // Принудительный reflow фиксирует исходное состояние абзацев, иначе transition не сработает
  void letter.offsetWidth;
  letter.classList.add("is-visible");
  updateTimelineLine();
}

/* ---------------------------------------------------------
   Возврат к конверту
   --------------------------------------------------------- */
async function restart() {
  if (isAnimating) return;
  isAnimating = true;

  window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  await waitForScrollTop();

  album.hidden = true;
  letter.classList.remove("is-visible");
  envelopeScreen.classList.remove("is-opening", "is-letter-out", "is-leaving", "is-faded");
  envelopeScreen.hidden = false;
  document.body.classList.add("is-locked");
  window.scrollTo(0, 0);
  stopConfetti();
  confettiFiredForVisit = false;

  isAnimating = false;
}

// Ждём, пока плавный скролл доедет до верха (но не дольше 1.5 с)
function waitForScrollTop() {
  return new Promise((resolve) => {
    const startedAt = performance.now();
    const check = () => {
      if (window.scrollY <= 1 || performance.now() - startedAt > 1500) {
        resolve();
      } else {
        requestAnimationFrame(check);
      }
    };
    check();
  });
}

/* ---------------------------------------------------------
   Таймлайн: линия по скроллу и появление полароидов
   --------------------------------------------------------- */
let lineFrameRequested = false;

function updateTimelineLine() {
  lineFrameRequested = false;
  if (album.hidden) return;

  const trackRect = timelineLine.parentElement.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  // Линия дорисована до точки на 70% высоты экрана
  const drawnPixels = viewportHeight * 0.7 - trackRect.top;
  const progress = Math.min(Math.max(drawnPixels / trackRect.height, 0), 1);
  timelineLine.style.transform = `scaleY(${progress.toFixed(4)})`;
}

function requestLineUpdate() {
  if (lineFrameRequested) return;
  lineFrameRequested = true;
  requestAnimationFrame(updateTimelineLine);
}

function observeTimelineItems() {
  const items = timelineList.querySelectorAll(".timeline__item");

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const itemObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);   // анимируем только один раз
    });
  }, { threshold: 0.2 });

  items.forEach((item) => itemObserver.observe(item));
}

/* ---------------------------------------------------------
   Финал: конфетти при появлении секции
   --------------------------------------------------------- */
let confettiFiredForVisit = false;

function observeFinale() {
  if (!("IntersectionObserver" in window)) return;

  const finaleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !confettiFiredForVisit) {
        confettiFiredForVisit = true;
        launchConfetti();
      } else if (!entry.isIntersecting) {
        // Ушли с финала — при следующем визите снова будет праздник
        confettiFiredForVisit = false;
      }
    });
  }, { threshold: 0.4 });

  finaleObserver.observe(finaleSection);
}

/* ---------------------------------------------------------
   Конфетти на canvas (без библиотек)
   --------------------------------------------------------- */
const confettiContext = confettiCanvas.getContext("2d");
let confettiFrameId = null;
let confettiSafetyTimer = null;
let confettiPieces = [];
let confettiStartTime = 0;
let canvasWidth = 0;
let canvasHeight = 0;

function getConfettiColors() {
  const styles = getComputedStyle(document.documentElement);
  return [
    styles.getPropertyValue("--seal").trim(),
    styles.getPropertyValue("--gold").trim(),
    styles.getPropertyValue("--paper-deep").trim(),
    "#FFFFFF",
  ];
}

function resizeConfettiCanvas() {
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  confettiCanvas.width = Math.round(canvasWidth * pixelRatio);
  confettiCanvas.height = Math.round(canvasHeight * pixelRatio);
  confettiContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
}

function createConfettiPiece(colors) {
  return {
    startX: Math.random() * canvasWidth,
    startY: randomBetween(-canvasHeight * 0.5, -12),  // старт выше экрана, вразнобой
    fallSpeed: randomBetween(0.4, 0.7) * canvasHeight, // px в секунду
    driftAmplitude: randomBetween(12, 40),             // размах покачивания
    driftFrequency: randomBetween(1.2, 2.6),
    driftPhase: Math.random() * Math.PI * 2,
    wind: randomBetween(-20, 20),                      // лёгкий общий снос
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: randomBetween(-4, 4),               // радиан в секунду
    flipSpeed: randomBetween(3, 7),                    // «переворот» листочка
    color: colors[Math.floor(Math.random() * colors.length)],
  };
}

function launchConfetti() {
  if (prefersReducedMotion()) return;
  stopConfetti();

  resizeConfettiCanvas();
  const colors = getConfettiColors();
  confettiPieces = Array.from({ length: CONFETTI_COUNT }, () => createConfettiPiece(colors));
  confettiCanvas.classList.add("is-active");
  confettiStartTime = performance.now();
  confettiFrameId = requestAnimationFrame(drawConfettiFrame);
  // Страховка: если вкладка в фоне и кадры не приходят — всё равно остановимся
  confettiSafetyTimer = setTimeout(stopConfetti, CONFETTI_DURATION + 100);
}

function drawConfettiFrame(now) {
  const elapsed = now - confettiStartTime;
  if (elapsed >= CONFETTI_DURATION) {
    stopConfetti();
    return;
  }

  const seconds = elapsed / 1000;
  // В последние 600 мс всё плавно гаснет
  const fadeOut = Math.min(1, (CONFETTI_DURATION - elapsed) / 600);

  confettiContext.clearRect(0, 0, canvasWidth, canvasHeight);
  confettiContext.globalAlpha = fadeOut;

  confettiPieces.forEach((piece) => {
    const y = piece.startY + piece.fallSpeed * seconds;
    if (y > canvasHeight + 20) return;

    const x = piece.startX
      + piece.wind * seconds
      + Math.sin(seconds * piece.driftFrequency + piece.driftPhase) * piece.driftAmplitude;
    const angle = piece.rotation + piece.rotationSpeed * seconds;
    const flip = Math.cos(seconds * piece.flipSpeed + piece.driftPhase);

    confettiContext.save();
    confettiContext.translate(x, y);
    confettiContext.rotate(angle);
    confettiContext.scale(1, flip);
    confettiContext.fillStyle = piece.color;
    confettiContext.fillRect(-3, -5, 6, 10);
    // Белые кусочки обводим, чтобы не терялись на светлом фоне
    if (piece.color.toUpperCase() === "#FFFFFF") {
      confettiContext.strokeStyle = "rgba(122, 111, 98, .25)";
      confettiContext.lineWidth = 0.5;
      confettiContext.strokeRect(-3, -5, 6, 10);
    }
    confettiContext.restore();
  });

  confettiFrameId = requestAnimationFrame(drawConfettiFrame);
}

function stopConfetti() {
  clearTimeout(confettiSafetyTimer);
  if (confettiFrameId !== null) {
    cancelAnimationFrame(confettiFrameId);
    confettiFrameId = null;
  }
  confettiContext.globalAlpha = 1;
  confettiContext.clearRect(0, 0, canvasWidth, canvasHeight);
  confettiCanvas.classList.remove("is-active");
  confettiPieces = [];
}

/* ---------------------------------------------------------
   Запуск
   --------------------------------------------------------- */
renderContent();
observeTimelineItems();
observeFinale();

envelopeButton.addEventListener("click", openEnvelope);

scrollArrow.addEventListener("click", () => {
  timelineSection.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
});

restartButton.addEventListener("click", restart);

window.addEventListener("scroll", requestLineUpdate, { passive: true });
window.addEventListener("resize", () => {
  requestLineUpdate();
  if (confettiFrameId !== null) resizeConfettiCanvas();
});
