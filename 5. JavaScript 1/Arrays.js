var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

console.log(days);
console.log(days[3]);
days[3]="january";
console.log(days);
days[7]="Hagura";
console.log(days);
days[8]=32,days[9]=false,days[10]=null,days[11]=4.5;
days[12]="A day in Mars";
console.log(days);

// 2D Array   i.e Array inside Array

var matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
];

console.log(matrix);
console.log(matrix[1][3]);


// Basic Array Methods

days.sort();
days.reverse();
console.log(days);
console.log(days.indexOf("Monday"));