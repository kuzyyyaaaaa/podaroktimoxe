// Прайс iPhone 18 Pro и Pro Max. price — минимальная цена сейчас, prev — в прошлом прайсе.
// Стрелка вниз ставится сама, если price < prev.
window.PRICE = {
  title: 'iPhone 18 Pro\nи Pro Max',
  date: '17.11.2026',
  size: 'large',
  models: [
    { name: 'iPhone 18 Pro', phone: 'iphone-18-pro', rows: [
      { mem: '256 ГБ', price: 116100, prev: 116600 },
      { mem: '512 ГБ', price: 140800, prev: 145800 },
      { mem: '1 ТБ', price: 171600, prev: 178200 },
      { mem: '2 ТБ', price: 226100, prev: 228300 },
    ]},
    { name: 'iPhone 18 Pro Max', phone: 'iphone-18-pro-max', rows: [
      { mem: '256 ГБ', price: 130700, prev: 133100 },
      { mem: '512 ГБ', price: 151300, prev: 158400 },
      { mem: '1 ТБ', price: 192500, prev: 207900 },
      { mem: '2 ТБ', price: 256300, prev: 240900 },
    ]},
  ],
};
