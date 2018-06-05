const x = [];
x.push("coding");
x.push("dojo");
x.push("rocks");
console.log(x);  
// Basic 1
const x = [];
x.push("coding");
x.push("dojo");
x.push("rocks");
x.pop();
console.log(x);
// Basic 1

const y = [];
console.log(y);
// Basic 2
const y = [];
x.push(88);
console.log(y);
// Basic 2

const z = [9, 10, 6, 5, -1, 20, 13, 2];
console.log(z);
// Basic 3
const z = [9, 10, 6, 5, -1, 20, 13, 2];
for (let i = 0; i < z.length-1; i++) {
console.log(z[i]);
}
// Basic 3

const names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
console.log(names.length);
// Basic 4
const names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
for (let i = 0; i < names.length; i++) {
    if (names[i].length === 5) {
        console.log(names[i]);
    }
}
// Basic 4

function yell(string) {
    return string.toUpperCase();
};
console.log(yell("hello ken"));
// Basic 5