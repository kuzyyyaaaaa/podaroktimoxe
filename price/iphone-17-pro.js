// Прайс iPhone 17 Pro и Pro Max. price — минимальная цена сейчас, prev — в прошлом прайсе.
// Стрелка вниз ставится сама, если price < prev.
window.PRICE = {
  title: 'iPhone 17 Pro\nи Pro Max',
  date: '24.10.2026',
  size: 'large',
  models: [
    { name: 'iPhone 17 Pro', phone: 'iphone-17-pro', rows: [
      { mem: '256 ГБ', price: 101200, prev: 103100 },
      { mem: '512 ГБ', price: 118800, prev: 120500 },
      { mem: '1 ТБ', price: 136400, prev: 133700 },
    ]},
    { name: 'iPhone 17 Pro Max', phone: 'iphone-17-pro-max', rows: [
      { mem: '256 ГБ', price: 107500, prev: 107700 },
      { mem: '512 ГБ', price: 123200, prev: 123200 },
      { mem: '1 ТБ', price: 141900, prev: 150200 },
      { mem: '2 ТБ', price: 153500, prev: 157900 },
    ]},
  ],
};
