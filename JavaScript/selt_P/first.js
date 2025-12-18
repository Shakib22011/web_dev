console.log("Hello JS!");
console.log("Its Shakib Hossain."); //console.log prints the result in the browser console

let name="Shakib Hossain";
console.log(name);
let age=23;
console.log(age);
let isfollow=true;
console.log(isfollow);
let x="5"+5+6;
console.log(x); //first ta string hole porer gula string dhore ney
let y=1+4+"7";
console.log(y); //but er ager gula thik e number hisebe dhoira ney
console.log(typeof y);
const student = {
    name : "Shakib Hossain",
    age : 23,
    cgpa : 3.80,
    pass : true,
};
student.cgpa=3.85;    //update previous key value
student.addr="Tangail";  //assign new key:value to const object
console.log(student);
document.getElementById("demo").innerHTML=student.name;
console.log(student["addr"]);
const date = new Date("2022-03-25");
console.log(date);
let a='A';
console.log(typeof a);

const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
document.getElementById("demo").innerHTML = greeting;

// &&= assigns the right-hand value only if the left-hand value is truthy.

//Numbers other than 0 are truthy.


 //||= assigns the right-hand value only if the left-hand value is falsy


//  The ??= Operator
// The Nullish coalescing assignment operator is used between two values.

// If the first value is undefined or null, the second value is assigned.

//Comparing two JavaScript objects always returns false.