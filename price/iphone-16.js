// Прайс iPhone 16. price — минимальная цена сейчас, prev — в прошлом прайсе.
// Стрелка вниз ставится сама, если price < prev.
window.PRICE = {
  title: 'Линейка iPhone 16',
  date: '24.10.2026',
  models: [
    { name: 'iPhone 16e', phone: 'iphone-16e', rows: [
      { mem: '128 ГБ', price: 50100, prev: 50100 },
      { mem: '256 ГБ', price: 51700, prev: 51700 },
      { mem: '512 ГБ', price: 60500, prev: 60000 },
    ]},
    { name: 'iPhone 16', phone: 'iphone-16', rows: [
      { mem: '128 ГБ', price: 65500, prev: 66800 },
    ]},
    { name: 'iPhone 16 Plus', phone: 'iphone-16-plus', rows: [
      { mem: '128 ГБ', price: 76500, prev: 76300 },
      { mem: '256 ГБ', price: 85300, prev: 85300 },
      { mem: '512 ГБ', price: 88000, prev: 88000 },
    ]},
    { name: 'iPhone 16 Pro', phone: 'iphone-16-pro', rows: [
      { mem: '128 ГБ', price: 89300, prev: 93000 },
      { mem: '256 ГБ', price: 95200, prev: 118800 },
      { mem: '512 ГБ', price: 126500, prev: 126500 },
      { mem: '1 ТБ', price: 136400, prev: 136400 },
    ]},
    { name: 'iPhone 16 Pro Max', phone: 'iphone-16-pro-max', rows: [
      { mem: '256 ГБ', price: 100700, prev: 104000 },
      { mem: '512 ГБ', price: 118300, prev: 118300 },
      { mem: '1 ТБ', price: 128700, prev: 128700 },
    ]},
  ],
};
