// Прайс iPhone 17 Pro и Pro Max. price — минимальная цена сейчас, prev — в прошлом прайсе.
// Стрелка вниз ставится сама, если price < prev.
window.PRICE = {
  title: 'iPhone 17 Pro\nи Pro Max',
  date: '17.11.2026',
  size: 'large',
  models: [
    { name: 'iPhone 17 Pro', phone: 'iphone-17-pro', rows: [
      { mem: '256 ГБ', price: 101200, prev: 101200 },
      { mem: '512 ГБ', price: 122700, prev: 118800 },
      { mem: '1 ТБ', price: 133100, prev: 136400 },
    ]},
    { name: 'iPhone 17 Pro Max', phone: 'iphone-17-pro-max', rows: [
      { mem: '256 ГБ', price: 106400, prev: 107500 },
      { mem: '512 ГБ', price: 123800, prev: 123200 },
      { mem: '1 ТБ', price: 145200, prev: 141900 },
      { mem: '2 ТБ', price: 161200, prev: 153500 },
    ]},
  ],
};
