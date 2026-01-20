/*let names = ["John", "David", "Mary"];
console.log(names);

names[1] = "Steve";
console.log(names);

let score1 = 42;
let score2 = 55;
let score3 = 61;
console.log(score1, score2, score3);

let scores = [43, 56, 62];
console.log(scores);

let colours = ["red", "orange", "yellow"];
console.log(colours[0]);

names.push("Michael");
console.log(names.length);

let fruits = ["apple", "banana", "cherry"];
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("orange");
console.log(fruits);
fruits.shift();
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}  //forgot to add this earlier

console.log(fruits.indexOf("banana"));
console.log(fruits.indexOf("eggplant"));

let fruits2 = ["apple", "banana", "orange", "pear"];
let citrus = fruits2.slice(2, 4);
console.log(citrus);
fruits2.splice(1, 1, "grape");
console.log(fruits2);
*/

let basket = ["apple", "banana", "orange", "pear"];
console.log(basket[0]);
console.log(basket[basket.length-1]);
basket.splice(basket.indexOf("banana"), 1, "kiwi");
console.log(basket);
basket.pop();
console.log(basket);
basket.unshift("mango");
console.log(basket);
for (let i = 0; i < basket.length; i++) {
	console.log(basket[i]);
}
console.log(basket.indexOf("orange"));
if (basket.indexOf("orange") <= 1) {
	console.log("Orange found at index 1");
} else console.log("Orange not found");

function setup() {
	createCanvas(500, 500);
	background(55);
	rectMode(CENTER);
}

function draw() {
	rect(250, 250, 100, 100);
}
