//hw 1
// function delayedMessage(){console.log("This message is delayed")};
// setTimeout(delayedMessage, 3000);
// console.log("Starting...");

//const { response, text } = require("express");

// hw 2

// const prompt = require('prompt-sync')();

// function foo(number){
//     const id = setInterval(()=> {
//         console.log(number);
//         number--;
//     if(number === 0){
//         clearInterval(id);
//         console.log("Time's up!");
//     }
//     },1000);

// }

// let num = prompt("Enter number:  ");

// foo(num);

// hw 3 

// fetch('https://jsonplaceholder.typicode.com/posts')

// .then(response=>{
//     return response.json();
// })
// .then(data =>{
//     console.log(data[0].title);
// })

// hw 4
// function simulateDownload(filename, callback){
//     setTimeout(function (){
//         callback("download complere: " + filename);
//     },2000);
// };

// simulateDownload("file1.txt", function (message) {
//   console.log(message);
// });


// hw 6 

// class UserFtcher{
//     constructor(baseUrl){
//         this.baseUrl = baseUrl;
//     }
//     async getUser(userId){
//         const response = await fetch(`${this.baseUrl}/users/${userId}`);
//         const Json = await response.json();
//         return Json;
//     }
//     async printUserName(userId){
//         const user = await this.getUser(userId);
//         console.log(user.name);
//     }
// }

// const fu = new UserFtcher(`https://jsonplaceholder.typicode.com`);
// fu.printUserName(1);
 
//hw 7
// class DataPipeline{
   
//     fetchData(baseUrl){
//      return fetch(baseUrl)
//             .then(resp=> resp.json());
//     }
//     filterData(data){
//       return data.filter(res => res.userId <= 5);
//     }
//     logData(data){
//         console.log(data);
//     }
// }
// const pip = new DataPipeline();
// pip
// .fetchData('https://jsonplaceholder.typicode.com/posts')  
// .then(data => pip.filterData(data))
// .then(filter => pip.logData(filter))

// hw 8
// class FileUploader{
//     constructor(filename){
//         this.filename = filename;
//     }
//     notifyUser(){
//         console.log(`end download`);
//     }
//     startUpload(){
//         console.log("download.....");
//         setTimeout(()=>{console.log(`${this.filename} is uploading `); this.notifyUser();}, 2000);
//     }
    
// }

// const foo = new FileUploader('exemple.txt');
// foo.startUpload();

  
