// Прайс iPhone 14 и 15. price — минимальная цена сейчас, prev — в прошлом прайсе.
// Стрелка вниз ставится сама, если price < prev.
window.PRICE = {
  title: 'iPhone 14 и 15',
  date: '24.10.2026',
  models: [
    { name: 'iPhone 14', phone: 'iphone-14', rows: [
      { mem: '512 ГБ', price: 64400, prev: 64400 },
    ]},
    { name: 'iPhone 14 Plus', phone: 'iphone-14-plus', rows: [
      { mem: '256 ГБ', price: 63800, prev: 63800 },
      { mem: '512 ГБ', price: 69900, prev: 69900 },
    ]},
    { name: 'iPhone 15', phone: 'iphone-15', rows: [
      { mem: '128 ГБ', price: 54500, prev: 55600 },
      { mem: '256 ГБ', price: 70100, prev: 70100 },
      { mem: '512 ГБ', price: 79100, prev: 79100 },
    ]},
    { name: 'iPhone 15 Plus', phone: 'iphone-15-plus', rows: [
      { mem: '128 ГБ', price: 69300, prev: 69300 },
      { mem: '512 ГБ', price: 75400, prev: 75400 },
    ]},
    { name: 'iPhone 15 Pro', phone: 'iphone-15-pro-max', rows: [
      { mem: '128 ГБ', price: 77200 },
    ]},
    { name: 'iPhone 15 Pro Max', phone: 'iphone-15-pro-max', rows: [
      { mem: '256 ГБ', price: 86900, prev: 88200 },
      { mem: '512 ГБ', price: 98500, prev: 97100 },
    ]},
  ],
};
