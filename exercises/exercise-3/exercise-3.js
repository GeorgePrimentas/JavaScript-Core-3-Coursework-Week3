let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

console.log("QTY\tITEM\t\t\tTOTAL");
let total = 0.00;
order.forEach(item => {
  let {itemName, quantity, unitPrice} = item; // Array destructuring
  console.log(quantity+"\t"+itemName+"\t\t"+(unitPrice*quantity).toFixed(2))
  total+=unitPrice*quantity;
});
console.log("\nTotal: "+total)

// A more elaborated solution catering for tabs...
// It seems that every tab in this console.log is 8 characters long
// Calculating longest itemName string:
// let maxLength = 0
// order.forEach(item => {
//   if (item.itemName.length > maxLength) {
//     maxLength = item.itemName.length
//   }
// });
// let numberOfTabs = Math.trunc(maxLength / 8);
// let tabString = ""
// for (i=0; i <= numberOfTabs-1; i++) {
//   tabString+= "\t"
// }
// console.log("QTY\tITEM"+tabString+"TOTAL");
// let total = 0.00;
// order.forEach(item => {
//   let {itemName, quantity, unitPrice} = item; // Array destructuring
//   if (Math.trunc(item.itemName.length / 8) // NEEDS MORE WORK
//   console.log(quantity+"\t"+itemName+tabString+(unitPrice*quantity).toFixed(2))
//   total+=unitPrice*quantity;
// });
// console.log("\nTotal: "+total)