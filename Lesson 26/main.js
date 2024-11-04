var programmingL = ['Javascript', "Python", 'PHP'];

programmingL.push('Java');
programmingL.pop();
programmingL.unshift('c#');
programmingL.shift();

programmingL.splice(1, 0, 'Ruby');
programmingL.splice(0, 1, 'Java');




console.log(programmingL);
console.log(programmingL[1]);
document.write(programmingL);


console.log(Math.floor(Math.random()*6));

var students = ["Ariana", "Leon"];

var [s1, s2] = students;

console.log(students);
console.log(students[1]);
console.log(s1);
console.log(s2);


var places = ["London", "Paris", "New York", "Berlin"];

var [firstPlace, , secondPlace] = places;


console.log(firstPlace);
console.log(secondPlace);

var numbers = [1,2,3,4,5,6];

var [firstNumber, secondNumber, ...otherNumbers] = numbers;

console.log(firstNumber)
console.log(secondNumber);
console.log(otherNumbers);