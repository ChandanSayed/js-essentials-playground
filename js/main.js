// Array methods
const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 }
];

// filter method in an array
const filterProducts = items.filter(item => item.price > 100);
console.log(filterProducts);

// map methods in an array
const productPrices = items.map(item => item.price);
console.log(productPrices);

// forEach method in an array
items.forEach(item => console.log(item.name));
// forEach method does not return anything it just outputs the values.

// some method in an array
const inExpensiveItems = items.some(item => item.price <= 100);
console.log(inExpensiveItems);

// every method in an array
const hasExpensiveItems = items.every(item => item.price < 100);
console.log(hasExpensiveItems);
// this method check the condition for every items and all items condition needs to satisfy

//reduce method in an array
const total = items.reduce((currentTotal, item) => item.price + currentTotal, 0);
console.log(total);

// includes method in an array
const hasItem = productPrices.includes(100);
console.log(hasItem);
