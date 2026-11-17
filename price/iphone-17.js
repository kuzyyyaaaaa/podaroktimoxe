// Прайс iPhone 17, 17e и Air. price — минимальная цена сейчас, prev — в прошлом прайсе.
// Стрелка вниз ставится сама, если price < prev.
window.PRICE = {
  title: 'iPhone 17, 17E и Air',
  date: '17.11.2026',
  size: 'large',
  models: [
    { name: 'iPhone 17e', phone: 'iphone-17e', rows: [
      { mem: '256 ГБ', price: 64400, prev: 64400 },
      { mem: '512 ГБ', price: 72100, prev: 68200 },
    ]},
    { name: 'iPhone 17', phone: 'iphone-17', rows: [
      { mem: '256 ГБ', price: 79400, prev: 79200 },
      { mem: '512 ГБ', price: 97400, prev: 93000 },
    ]},
    { name: 'iPhone Air', phone: 'iphone-air', rows: [
      { mem: '256 ГБ', price: 82000, prev: 82000 },
      { mem: '512 ГБ', price: 88800, prev: 86900 },
      { mem: '1 ТБ', price: 97900, prev: 97900 },
    ]},
  ],
};
