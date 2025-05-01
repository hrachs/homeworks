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
