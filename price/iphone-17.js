// Прайс iPhone 17, 17e и Air. price — минимальная цена сейчас, prev — в прошлом прайсе.
// Стрелка вниз ставится сама, если price < prev.
window.PRICE = {
  title: 'iPhone 17, 17E и Air',
  date: '24.10.2026',
  size: 'large',
  models: [
    { name: 'iPhone 17e', phone: 'iphone-17e', rows: [
      { mem: '256 ГБ', price: 64400, prev: 64400 },
      { mem: '512 ГБ', price: 68200, prev: 71000 },
    ]},
    { name: 'iPhone 17', phone: 'iphone-17', rows: [
      { mem: '256 ГБ', price: 79200, prev: 82500 },
      { mem: '512 ГБ', price: 93000, prev: 96800 },
    ]},
    { name: 'iPhone Air', phone: 'iphone-air', rows: [
      { mem: '256 ГБ', price: 82000, prev: 82000 },
      { mem: '512 ГБ', price: 86900, prev: 87500 },
      { mem: '1 ТБ', price: 97900, prev: 97900 },
    ]},
  ],
};
