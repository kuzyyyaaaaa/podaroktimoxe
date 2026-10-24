// Прайс iPhone 18 Pro и Pro Max. price — минимальная цена сейчас, prev — в прошлом прайсе.
// Стрелка вниз ставится сама, если price < prev.
window.PRICE = {
  title: 'iPhone 18 Pro\nи Pro Max',
  date: '24.10.2026',
  size: 'large',
  models: [
    { name: 'iPhone 18 Pro', phone: 'iphone-18-pro', rows: [
      { mem: '256 ГБ', price: 116600, prev: 119900 },
      { mem: '512 ГБ', price: 145800, prev: 148500 },
      { mem: '1 ТБ', price: 178200, prev: 185900 },
      { mem: '2 ТБ', price: 228300, prev: 233800 },
    ]},
    { name: 'iPhone 18 Pro Max', phone: 'iphone-18-pro-max', rows: [
      { mem: '256 ГБ', price: 133100, prev: 137000 },
      { mem: '512 ГБ', price: 158400, prev: 161700 },
      { mem: '1 ТБ', price: 207900, prev: 210100 },
      { mem: '2 ТБ', price: 240900, prev: 245300 },
    ]},
  ],
};
