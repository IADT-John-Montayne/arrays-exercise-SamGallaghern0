let names = ["John", "David", "Mary"];
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

function setup() {
	createCanvas(500, 500);
	background(55);
	rectMode(CENTER);
}

function draw() {
	rect(250, 250, 100, 100);
}
