/*
//Declaration of variables
let a;
let b;
let c;

var d;
var e;
var f;

//initialisation of variables
a = 10;
f = 'letter';
//Declaring and initialisation at the same time
let num1 = 10;
let num2 = 20;
let ans = num1 + num2;
console.log(ans);

//Difference between let, var, and const
//const is for values that will not change
//var has a wider scope;
//let has a very localised scope.
//syntax - rules governing the meaning.
//semmantics - rules governing the use of the language.
//is both structured-programing(top-down) and OOP(looking at things as objects)
//Dynamically type - it is not so strict on syntax.
//its a high level language - closer to human language.
//it was created by Brandon Eik.

//data types
let name = 'Hazel'; //data type of value is a string.
let num = 2502; // data type of value is number.
let num2 = 7.0; // data type of value is also a number.
//let num3 = [2,3,num4]; //num4 can not be accessed before it is declared.
let num4 = null;
let num5 = true;
console.log(typeof(num2));
console.log(typeof(name));
console.log(typeof(num));
console.log(typeof(num3));
//console.log(typeof(num4));
console.log(typeof(num5));
//Premitive data types are: numbers, strings, and booleans.
//composite data types are: arrays and objects.
//An array is a memory space that holds many values.
//An object is a memory space that holds many property-value pairs.
//Variable cannot be accessed before declaring.

let num1 = 10;
let mynums = [10,20,30,5.3,"sue",[40,50,60,[70,80,[90,100],200]]];
console.log(num1);
console.log(mynums[0]);
console.log(mynums[0]+mynums[3]);
console.log(mynums[5][1]);
console.log(mynums[5][3][1]);
console.log(mynums[5][3][2][1]);

//An operator tells a computer what to do with an operand.
// An operand is what an operator works upon;
let num1 = 19;
let num2 = 20;
let num3 = 40;
// let ans = num1 + num2;
// console.log(ans);
//Operators
// +, -, *,/,--,++,+=,!,!=,<,>,=,==,===,%,:-otherwise, ;-termination, &&-and, ||
let ans1 = num1%num2;
let ans2 = num2%num1;
// console.log(ans1, ans2);
//Conditions and loops in javascript
if(num1>=num2){
    console.log(num1);
};//prints nothing because the condition is not met.

if(num1>=num2){
    console.log(num1);
}
else{
    console.log(num2);
};//prints num2 because the condition is false.

let ans = num1 < num2? num1:num2;//prints num1 because the condition is true.
console.log(ans);

for(i=1; i<=num1; i++){
    console.log(i);
};//i initialised to 1, check if i is <= 1, if true; print i and increment i by 1, then continue the loop until the condition is false.
for(i=0; i<=num3; i+=4){
    if(i%2 == 0){
        console.log(i);
    }
}


let num1 = 19;
let num2 = 20;
let num3 = 40;
for(i=0; i<=num3; i+=4){i%2==0?console.log(i):null;}

function even(){
    for(i=0; i<=num3; i+=4){
        // if(i%2 == 0){
        //     console.log(i);
        // }
        i%2==0?console.log(i):null;
    }
}
even();

function paye(){
    let pay = 1000000;
    let taxRate = 30;
    const a = 100;
    let tax = (taxRate/a)*pay;
    let totalPay = pay - tax;
    return totalPay;
}
function nssf(){
    let b = 100;
    let nssfRate = 11;
    let totalnssf = (nssfRate/b)*paye();
    let netPay = paye() - totalnssf;
    console.log(netPay);
}
nssf();//function call.

//function declaration with parameters(space-holders).
function paye1(pay, taxRate){
    const a = 100;
    let tax = (taxRate/a)*pay;
    let totalPay = pay - tax;
    return totalPay;
}
function nssf1(nssfRate){
    let b = 100;
    let totalnssf = (nssfRate/b)*paye1(1000000, 30);//function call with arguments.
    let netPay = paye1(1000000, 30) - totalnssf;
    console.log(netPay);
}
nssf1(11);//function call with argument.


//Built in methods in arrays
//Those that add an element to the item:push and unshift
const set = [];
//push-adds an item to the end of an array, therefore takes items to be included.
set.push(23, 40, 10, 50, 5, 80, 20, 100);
console.log(set);
//unshift - adds items to the beginning of the array, takes items to be included.
set.unshift(200,300);
console.log(set);
//Those that remove items from an array:pop and shift.
//pop - removes items at the end of an array.
let popped = set.pop();
console.log(set, popped);
//shift - removes items at the beginning  of an array.
let shifted = set.shift();
console.log(set, shifted);
//splice - divides from a certain index through a given number of items.
let spliced = set.splice(3,4);
console.log(set, spliced);
//toUpperCase changes the string to uppercase.
let firstName = 'george';
console.log(firstName.toUpperCase());
*/
/**OOP - Object Oriented Programing
 * OOP is based on real life objects,
 * Concepts in OOP,
 * Abstraction-generality,
 * Polymophism-existence of an Object in more than one form,
 * Inheritance-having one or more attributes of the bigger group.,
 * Encapsulation-restricted access-private,protected,public.
 * if the phrase "is a" applies, then it is an object.
 * Identify 7 Object: a market, a squirel, a bed, a pot, a shoe, a book, a table.
 * advantages of object oriented program
 *      There is no repeat of code.
 *      Enables modeling of software based on real world objects.
 * how to achieve OOP
 *  Class vs Objects
 *       A class is a blue-print of an object.
 *      An object is an instance of a class.
 */
/*
//Object in javascript
let myObject = {};
console.log(typeof myObject);

function sum() {}
console.log(typeof sum);

let food = {
  name: "potatoes",
  taste: "sweet",
  price: 4000,
  quantity: "3 bags",
  preparation: function () {
    return "peel, wash to the pan, add salt, add water till visible, cook for 30minutes under media heat, monitor its readiness, when ready? allow it to cool and serve with any pasted sauce";
  },
};
console.log(food.preparation());
console.log(typeof food);


//Assignment on Objects

//Object market
let currentTime = new Date().getHours();
currentTime = new Date().getHours(07);
const market = {
  name: "Gulu Central Market",
  location: "Market Street",
  commonLanguages: "Luo, English, Kiswahili",
  soldGoods: "General merchandise and services",
  paymentMode: "cash",
  management: "Gulu City Counsil",
  status: function (time) {
    if (currentTime >= 07 && currentTime < 18) {
      return "Market open";
    } else {
      return "Market closed";
    } //Determines if market is closed or open according to time.
  },
};
console.log(market);
console.log(market.status(currentTime));

//Object squirel
const squirel = {
  animalCategory: "Rodent",
  description:
    "Small animal with ginger fur, whiteline running on lateral side of the body and a tail that expands towards the end",
  habitat: "underground in barrows",
  climbAbility: true,
  food: "Groundnuts and Tubers like sweet potatoes",
  activeTime: function (time) {
    if (currentTime >= 6 && currentTime < 19) {
      return "Squirels are a wake and active";
    } else {
      return "Squirels are sleeping";
    } //Determines activity of squirels.
  },
  edible: true,
};
console.log(squirel.activeTime(currentTime)); //Depending on time, squirels a wake or sleeping.

//Features of beds offered
const bed = {
  //use "" to maintain farmilia a by b bed sizes.
  size: ["3 * 6", "4 * 6", "5 * 6", "6 * 6", "Queen Size", "King Size"],
  materialType: ["wooden", "metallic", "plastic"],
  nature: ["Already made", "custom"],
  decks: ["Single", "Double", "Triple"],
  assembly: ["Fixed", "reassemblable"],
  color: ["Brown", "Black", "White", "Blue", "Custom color"],
  drawers: [true, false],
};
console.log("Features of beds offered:", bed);

//Bed ordered by customer named George.
const georgesBed = {
  size: bed.size[2],
  materialType: bed.materialType[0],
  nature: bed.nature[1],
  decks: bed.decks[0],
  assembly: bed.assembly[1],
  color: bed.color[2],
  drawers: bed.drawers[0],
};
console.log("George's Bed:", georgesBed);

//Features of Object Pot
const pot = {
  baked: true,
  capacity: "20litres",
  material: "Clay soil",
  advantage: "Cools water to a desirable temperature",
  disadvantage: "Very fragile",
  Decorated: true,
  price: 15000,
  painted: true,
};
console.log("Features of the object pot:", pot);

//Features of Object shoe
const shoe = {
  sytle: "dress shoe",
  color: "Black",
  material: "Italian Leather",
  size: 46,
  sole: "Rubber",
  shoelaces: true,
  price: 250000,
};
console.log("Features of object shoe:", shoe);

//Features of object book
const book = {
  manufacturer: "Picfare",
  catergoty: "Notebook",
  paperColor: "White",
  size: "4Quaire",
  marginPresent: true,
  cover: "Hard",
  Durability: "short",
};
console.log("Feature of object book", book);

//Features of object table
const table = {
  type: "Dinning table",
  material: "Glass",
  shape: "rectangular",
  Opacity: "Transluscent",
  decoration: "flowers",
  strength: "Delicate",
  seatNumber: "6 seater",
};
console.log("Features of object table:", table);
*/
