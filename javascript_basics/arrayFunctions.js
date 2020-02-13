const items = [
  { name: "Bike", price: 100 },
  { name: "MoterBike", price: 2400 },
  { name: "Ipad", price: 1500 },
  { name: "Laptop", price: 2000 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 }
];

// Filter:  return true or false
const filteredItems = items.filter(item => {
  return item.price <= 100;
});
console.log(items);
console.log(filteredItems);

// Map:
const itemNames = items.map(item => {
  return item.name;
});
console.log(itemNames);

// Find
const foundItem = items.find(item => {
  return item.name === "Computer";
});
console.log(foundItem);

// ForEach
items.forEach(item => {
  console.log("Item is " + item.name);
  //    console.log(JSON.stringify(item));
});

// Some => ANY match
const hasAnyInexpensiveItems = items.some(item => {
  return item.price <= 100;
});
console.log(hasAnyInexpensiveItems);

// every => ALL match
const hasAllInexpensiveItems = items.every(item => {
  return item.price <= 500;
});
console.log(hasAllInexpensiveItems);

//Reduce => Group to one
const totalPrice = items.reduce((currentTotal,item) => {
    //console.log("Current Total :: "+currentTotal);
    //console.log("Current Item price :: "+item.price);
  return item.price + currentTotal;
}, 0);
console.log(totalPrice);

//Includes
const nums = [1,2,3,4,5];
const includesTwo = nums.includes(2);
//const includesTwo = nums.includes(7);
console.log(includesTwo);