// hw 1

// function foo(a,b){
//     return a+b;
// }

// let arrow = (a,b) => {
//     return a+b;
// }

// let a=10, b=20;

// console.log(foo(a,b));
// console.log(arrow(a,b));

// hw2

// const obj={
//     x: 10,
//     y: 20,
//     foo: function(){
//         return this.x+this.y;
//     },
//     myf: ()=>{
//         return this.x+this.y;
//     }

// }

// console.log(obj.foo());
// console.log(obj.myf()); // undefined + undefined == NaN

//hw 3
// const arr1 = [1, 2, 3, 4];

// const arr2 = arr1.map((x)=> x * 2);
// console.log(arr2);


// hw 4
// function foo(){
//     console.log(arguments);
// }

// let bar = () => {
//     console.log(arguments);
// }

// foo(1,2,3);
// bar(1,2,3); // չունի իր սեփական արգումենտները հղվում է իրռենից վեր գտնվող ֆունկցիայի տարածք որնե հանդիսանում է մեր ծրագիրը ակտիվացնող ֆունկցիան 

// let baz = (...args) => {
//     console.log(args);
// }

// baz(1,2,3);

//hw 5
// const person=(name)=>{
//     this.name = name;
// }

// let a = new person('Anna');
// console.log(a); //arrow ֆունցիանները չունեն իրենց սեփական thisը նրանք դա ժառանգում են նաև չունի constructor մեթոդ


//hw 6

// const qar =(x) => {return x * x}; //explicit
// const qar2 = x => x * x; // implicit

// console.log(qar(12));
// console.log(qar2(12));

//  hw 7

// const obj= {
//     a: 10,
//     b: 20,
//     foo: function(){
//         return this.a + this.b;
//     }
// }

// console.log(obj.foo());

// const obj2= {
//     a: 10,
//     b: 20,
//     foo: ()=>{
//         return this.a + this.b;
//     }
// }
// console.log(obj2.foo());

// hw 8

// function foo (x){return x * 2};

// function mymap(arr, foo){
//     const result = [];
//     for(let i = 0; i < arr.length; i++){
//         result.push(foo(arr[i]));
//     }
//     return result;
// }

// const arr = [1,2,3,4,5];
// const res = mymap(arr, foo);
// console.log(res);


// hw 9 
// function myfilter(arr, foo){
//     const result=[]
//     for(let i = 0; i < arr.length; i++){
//        if(foo(arr[i])){
//         result.push(arr[i]);
//        }
//     }
//     return result;
// }



// const arr = [1,2,3,4,5,6,7,8,9,];

// const result=myfilter(arr, (value)=> value % 2 === 0);

// console.log(result);

// // hw 10
// function myforEach(arr, foo){
//     for(let i = 0; i < arr.length; i++){
//         foo(arr[i]);
//     }
// }

// const arr = [1,2,3,4,5,6,7,8,9,];

// myforEach(arr, console.log);

