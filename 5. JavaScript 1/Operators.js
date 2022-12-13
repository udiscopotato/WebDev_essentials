// Arithmatic Operatiors 
console.log(9+3);
console.log(23/7);
var a = 9;
var b = 5;
console.log(a*b);
console.log(a%b);
console.log(b-a);


// Relational Operators
console.log( a < b);
console.log(a>b);
console.log(a == b);
console.log( a != b);
console.log( 1 === '1'); // type unsafe equality operator    * Explore: !==


// Logical Operators
var isRaining = true, goingWalk = true , goingCar = false;
var takeUmbrella = isRaining && goingWalk;
console.log(takeUmbrella);
var priceOfPhone = 42000;
var bankBalance = 60000;
var intrested = false;
if(intrested || bankBalance>priceOfPhone){
    console.log("Buy Phone");
}
if(intrested && bankBalance>priceOfPhone){
    console.log("Buy Phone");
}


// Miscellaneous 
var name = "Subham" , message = "Good Morning"
console.log(message+" "+name);