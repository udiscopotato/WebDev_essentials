
// Conditional or Branching
var priceOfPhone = 42000, bankBalance = 20000 , creditLimit= 40000;
if( priceOfPhone < bankBalance){
    console.log("all ok , Processing Payment ..");
}else if(priceOfPhone < creditLimit){
    console.log("Bank payment failed. Credit card will be used")
}else{
    console.log("Sorry you don't have sufficient balance");
}
console.log("transaction over ..");


// Switch Case

var chocolate = "Dairy Milk", quantity;
switch(chocolate){
    case "Dairy Milk":
        quantity = 5;
        break;
    case "Hersheys":
        quantity = 10;
        break;
    case "Milky Bar":
        quantity = 8;
        break;
    default:
        quantity = 2;
}
console.log(quantity);