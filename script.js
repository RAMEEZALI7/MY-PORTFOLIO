// const students = ["saad", "ali", "ahmed", "zain", "fatima", "hassan"];
// let searchName = prompt("enter your name");
// let found = false;
// for (let i = 0; i < students.length; i++) {
// if (students[i] === searchName) {
//     console.log("student found!");
//     found = true;
//     break;
// }
//     }
//     if (!found) {
//     console.log("student not found!");
// }
// function welcome () {
//     console.log("Welcome to the student search program!");
// }
// welcome();
// function welcome () {
//     document.write("Welcome to the student search program!");
// }
// welcome();
// function welcome(name) {
//     console.log("hello" , name);
// }
// welcome("saad beta");
// welcome("ali beta");
//  function add(a, b) {
//     return a + b;
// }
// let result = add(5, 10);
// console.log(result);
// function add(num1,num2,num3,num4,num5 ) {
//     console.log(num1 + num2 + num3 + num4 + num5);  
// }
// add(1, 2, 3, 4, 5);
// add(10, 20, 30, 40, 50);
// function multiply(num1,num2,num3,num4,num5 ) {
//     console.log(num1 * num2 * num3 * num4 * num5);  
// }
// multiply(1, 2, 3, 4, 5);
// multiply(10, 20, 30, 40, 50);
// function calculate() {
//     let num1 = Number(prompt("Enter first number:"));
//     let num2 = Number(prompt("Enter second number:"));
//     let num3 = Number(prompt("Enter third number:"));
//     let num4 = Number(prompt("Enter fourth number:"));
//     let add = num1 + num2 + num3 + num4;
//     let multiply = num1 * num2 * num3 * num4;
//     let divide = num1 / num2 / num3 / num4;
//     let subtract = num1 - num2 - num3 - num4;
//     document.write("Addition: " + add + "<br>");
//     document.write("Multiplication: " + multiply + "<br>");
//     document.write("Division: " + divide + "<br>");
//     document.write("Subtraction: " + subtract + "<br>");
// }
// calculate();
// let student = {
//     age: 20,
//     name: "saad",
//     city: "karachi",
// }
// addstudent = ("student", student);  
//     console.log(student);
// let student2 = {
//     name: "saad",
//     course: "web development",
//     age: 20,
//     city: "karachi",
// }
// delete student.course;
// student.marks = 90;
// student.rollNo = 12345;
// console.log(student2);
// let person = {
//     name: "saad",
//     age: 20,
//     welcome: function() {
//         console.log("welcome to the website!");
//         console.log("my name is " + this.name + " and my age is " + this.age);

//     }
// }
// let promptname = prompt("Enter your name");
// let promptmath = Number(prompt("Enter your math marks"));
// let promptenglish = Number(prompt("Enter your English marks"));
// let promptscience = Number(prompt("Enter your science marks"));

// let totalnumber = promptmath + promptenglish + promptscience;

// let student = {
//     name: promptname,
//     age: 20,
//     math: promptmath,
//     english: promptenglish,
//     science: promptscience,
//     rollNo: 12345,
//     percentage: (totalnumber / 300) * 100
// };

// document.write("Student Name: " + student.name);
// document.write("Total Marks: " + totalnumber);
// document.write("Percentage: " + student.percentage + "%");
// document.write("Roll No: " + student.rollNo);
// document.write("Math Marks: " + student.math);
// document.write("English Marks: " + student.english);
// document.write("Science Marks: " + student.science);


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <script src="script.js"></script>
//     <h2>MY TO DO LIST</h2>
//     <input type="text" placeholder="enter task">
//     <button onclick="addtask()"></button>
//     <ul></ul>
//     <script>
//         let task = [];
//         function addtask(){
//             let name = document.getElementById("task").value;
//             if(name ===""){
//                 alert("please enter a task");
//                 return;
//             }
//             let task = {name:name};
//             tasks.push(task);
//             showtasks();
//             document.getElementById("task").value = "";
//         }
//         function showtasks(){
//             let output = "";
//             for(let i = 0; i < tasks.length; i ++){
//                 output += "<li>" + tasks[i].name +
//                     "<button onclick='deletetask("+i+")'>delete</button></li>";
//             }
//             document.getElementById("list").innerHTML=output;
//         }
//         function deletetask(index){
//             tasks.splice(index,1);
//             showtask();
//         }
//     </script>
// </body>
// </html>
//   <!-- <h2>MY TO DO LIST</h2>

//     <input type="text" id="task" placeholder="Enter task">
//     <button onclick="addtask()">Add Task</button> -->

//     <!-- <ul id="list"></ul>

//     <script>
//         let tasks = [];

//         function addtask() {
//             let name = document.getElementById("task").value;

//             if (name.trim() === "") {
//                 alert("Please enter a task");
//                 return;
//             }

//             let task = { name: name };
//             tasks.push(task);

//             showtasks();

//             document.getElementById("task").value = "";
//         }

//         function showtasks() {
//             let output = "";

//             for (let i = 0; i < tasks.length; i++) {
//                 output += "<li>" + tasks[i].name +
//                     " <button onclick='deletetask(" + i + ")'>Delete</button></li>";
//             }

//             document.getElementById("list").innerHTML = output;
//         }

//         function deletetask(index) {
//             tasks.splice(index, 1);
//             showtasks();
//         }
//     </script>

// <!-- </body>
// // </html> --> -->

// let count = 0;

// const display = document.getElementById("display");
// const increase = document.getElementById("increase");
// const decrease = document.getElementById("decrease");
// const reset = document.getElementById("reset");

// function updateDisplay() {
//   const sign = count < 0 ? "-" : "";
//   display.textContent =
//     sign + String(Math.abs(count)).padStart(4, "0");
// }

// increase.addEventListener("click", () => {
//   count++;
//   updateDisplay();
// });

// decrease.addEventListener("click", () => {
//   count--;
//   updateDisplay();
// });

// reset.addEventListener("click", () => {
//   count = 0;
//   updateDisplay();
// });