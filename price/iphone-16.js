// Прайс iPhone 16. price — минимальная цена сейчас, prev — в прошлом прайсе.
// Стрелка вниз ставится сама, если price < prev.
window.PRICE = {
  title: 'iPhone 16',
  date: '24.10.2026',
  models: [
    { name: 'iPhone 16e', rows: [
      { mem: '128 ГБ', price: 50100 },
      { mem: '256 ГБ', price: 51700 },
      { mem: '512 ГБ', price: 60500 },
    ]},
    { name: 'iPhone 16', rows: [
      { mem: '128 ГБ', price: 65500 },
    ]},
    { name: 'iPhone 16 Plus', rows: [
      { mem: '128 ГБ', price: 76500 },
      { mem: '256 ГБ', price: 85300 },
      { mem: '512 ГБ', price: 88000 },
    ]},
    { name: 'iPhone 16 Pro', rows: [
      { mem: '128 ГБ', price: 89300 },
      { mem: '256 ГБ', price: 95200 },
      { mem: '512 ГБ', price: 126500 },
      { mem: '1 ТБ', price: 136400 },
    ]},
    { name: 'iPhone 16 Pro Max', rows: [
      { mem: '256 ГБ', price: 100700 },
      { mem: '512 ГБ', price: 118300 },
      { mem: '1 ТБ', price: 128700 },
    ]},
  ],
};
