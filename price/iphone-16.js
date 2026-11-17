// Прайс iPhone 16. price — минимальная цена сейчас, prev — в прошлом прайсе.
// Стрелка вниз ставится сама, если price < prev.
window.PRICE = {
  title: 'Линейка iPhone 16',
  date: '17.11.2026',
  models: [
    { name: 'iPhone 16e', phone: 'iphone-16e', rows: [
      { mem: '128 ГБ', price: 49000, prev: 50100 },
      { mem: '256 ГБ', price: 52300, prev: 51700 },
      { mem: '512 ГБ', price: 61600, prev: 60500 },
    ]},
    { name: 'iPhone 16', phone: 'iphone-16', rows: [
      { mem: '128 ГБ', price: 64900, prev: 65500 },
    ]},
    { name: 'iPhone 16 Plus', phone: 'iphone-16-plus', rows: [
      { mem: '128 ГБ', price: 75400, prev: 76500 },
      { mem: '256 ГБ', price: 85300, prev: 85300 },
    ]},
    { name: 'iPhone 16 Pro', phone: 'iphone-16-pro', rows: [
      { mem: '128 ГБ', price: 89300, prev: 89300 },
      { mem: '512 ГБ', price: 126500, prev: 126500 },
      { mem: '1 ТБ', price: 136400, prev: 136400 },
    ]},
    { name: 'iPhone 16 Pro Max', phone: 'iphone-16-pro-max', rows: [
      { mem: '256 ГБ', price: 104000, prev: 100700 },
      { mem: '512 ГБ', price: 118300, prev: 118300 },
    ]},
  ],
};
