
// // hw 1

// const library1 ={
//     title: 'A Thousand Splendid Suns',
//     author: 'Khaled Hosseini',
//     year: '2007',
//     genres: ['Historical Fiction'],
// }
  
// const library2 ={
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     year: ' 1924',
//     genres: ['Tragedy'],
// }

// const library3 ={
//     title: 'The Monk Who Sold His Ferrari',
//     author: 'Robin Sharma',
//     year: ' 1999',
//     genres: ['business fable '],
// }


// library1.genres.push("War Literature"); //զանգվածին ավելացնելու համար
// library2.year = 1925; //թվականի փոփոխման համար
// delete library3.author; // հեղինակին ջնջելու համար

// console.log(library1);
// console.log(library2);
// console.log(library3);

// // hw2

// let arrid = ['u1', 'u2', 'u3'];

// const users = {};

// let len = arrid[arrid.length - 1];


// for(let i = 0; arrid[i] <= len; i++){
//     users[i] = {score: 0};
// }


// console.log(users);

// users[1].score += 10;
// console.log(users);

// let newId = '4';

// users[newId] = {score: 0};
// console.log(users);

// // hw3

// let config ={};

// Object.defineProperty(config, 'SECRET_KEY',{
//     value: "xyz123",
//     writable: false,
//     enumerable: false,
//     configurable: false,

// });

// config.SECRET_KEY = '1111';// չի փոխվի քանզի  writable: false,
// console.log(config);// չենք տեսնի քանզի enumerable: false,

// console.log(config.SECRET_KEY); // enumerable անջատում է ցուցադրությունը բոլոր հատկությունների վրա բայց ոչ կոնկրետ նշվածի

// delete config.SECRET_KEY;
// console.log(config.SECRET_KEY); //չի ջնջվի  քանզի configurable: false,

// //hw 4

// const cloneDeep = require('lodash/cloneDeep');

// const obj ={
//     name: 'Hrach',
//     surename: 'Sahakyan',
// };

// const copy = cloneDeep(obj);

// copy.surename = 'Hakobyan';

// console.log(obj);

// console.log(copy);

// // hw 5

// function foo(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let flag = false; 
//         for (let j = 0; j < result.length; j++) {
//             if (arr[i] === result[j]) {
//                 flag = true;
//                 break; 
//             }
//         }
//         if (!flag) {
//             result.push(arr[i]); 
//         }
//     }
//     return result;
// }

// const arr=[1,2,3,4,4,3,1];

// const result=foo(arr);
// console.log(arr);

// console.log('result-> ', result);

// hw 6
// const prompt = require('prompt-sync')();

// function foo(arr, size){
//     let result = [];
//     for (let i = 0;  i < arr.length; i+=size) {
//         let x = arr.slice(i, i + size); // արգումենտ 1 start արգումենտ 2 stop
//         result.push(x);
//     }
//     return result;

// }

// let arr = ['a','b','c','d','e'];
// let size =Number( prompt("Enter the size of the array: "));
// let result = foo(arr, size);
// console.log(result);

// // hw 7

// let arr = [1, [2, [3, [4]], 5]];


// let flat = arr.flat(Infinity); // անվերջ խորությամբ բացում ենք զանգվածը միչև զրոյական վիճակ
// console.log(flat);

// // hw 8
// const arr =[[1,2], ['a','b'], [true,false]];
// let arr2 = [];

// function foo(arr, arr2){


// }


// // // hw 9 
// console.log(x);

// var x = 10; //var ով հայտարարված փոփոխականները hoist են լինում և դրա հաշվին տեսնում ենք undefined

// console.log(x);

// // hw 10
// //console.log(x);
// function demo(){
//     console.log(x);// undefinde նույն պատճարով ինչ նախորդ խնդիրը ուղակի այս անգամ այն տեղի է ունենում ֆունկցիայի սկոպերի ներսում
//     var x = 10;
//     console.log(x);
// }

// //console.log(x);
// demo();
// // console.log(x);


// //hw 11

// if(true){
//    console.log(y);
//     var y = 10; 
//     console.log(y)

// }
// console.log(y);

// // hw12

// foo();

// bar();

// function foo(){
//     console.log("function foo");
// }

// const bar = function(){
//     console.log("function bar");
// }

// //hw 13

// baz();

// let baz = () => {
//     console.log("function baz");
// }

// //hw 14
// let a = 10;
// let b = 20;


// add1(a, b);
// add2(a, b);


// var add1 = function(a, b){
//     return a+b;
// }

// const add2 = function(a, b){
//     return a+b;
// }

// // hw 15 

// var a = 1;
// let b = 2;
// const c =3;
// console.log(a, b, c);
// function foo(){
//     var a = 10;
//     let b = 20;
//     const c =30;
//     console.log(a, b , c);
// }
// console.log(a, b, c);


// foo()
// console.log(a, b , c);

// // hw 16

// function foo(){
//     console.log("this is foo");
// };

// const foo2 = () => {
//     console.log("this is arrow function");

// };

// foo();
// foo2();

// // hw 17

// const functions = [declared, expression, arrow];

// for (let i = 0; i < functions.length; i++){
//     console.log(functions[i])
// }

// function declared(){
//     return "declared"
// }

// const expression = function(){
//     return "expression"
// }

// const arrow =()=>{
//     return "arrow"
// }

// for (let i = 0; i < functions.length; i++){
//     console.log(functions[i]);
// }

// //hw 18

// (function(){
//     var z;
//     console.log(z);
//     z = 10;
// })();

// console.log(z);
