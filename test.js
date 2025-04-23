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



