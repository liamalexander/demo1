// let counter = 0;

// window.addEventListener("load", () => { 
//     const counterOutput = document.getElementById("counter");
    
//     function outputCounter() {
//         counterOutput.innerHTML = counter;
//     }

//     function addCounter(){
//         counter = counter + 1;
//         outputCounter();
//     }

//     function removeCounter(){
//         if (counter > 0) {
//         counter = counter - 1;
//         outputCounter();
//     }}

//     const buttonAdd = document.getElementById("buttonAdd");
//     buttonAdd.addEventListener("click", () => { 
//         addCounter();

//     const buttonRemove = document.getElementById("buttonRemove");
//     buttonRemove.addEventListener("click", () => { 
//         removeCounter();
//     })})})

    // const ul = document.querySelector("people");

    // const people = ['liam', 'ben', 'spencer'];

    // let html = ``;

    // people.forEach(function(person) {
    //     html += `<li style="color:purple">${person}</li>`;
    // });

    // ul.innerHTML = html;
    // console.log(html);

    // const title = 'Best Books 2020';
    // const author = 'Liam';
    // const likes = 50;

    // let result = `The blog by ${author} called ${title} has got ${likes} likes`;
    // // console.log(result);
    // let html = `
    // <h2>${title}</h2>
    // <p>By ${author}</p>
    // <span>This blog has got ${likes} likes.</span>
    // `;
    // console.log(html);

    // let people = ['liam', 'ben', 'spencer'];
    // people[2] = 'debbie';
    // let result = people.join(',');
    // result.concat(['alberto']);

    // console.log(people.pop());

    // let names = ['mario', 'luigi', 'peach'];
    // let result = names.includes('peach');
    // console.log(result);

    // for (let i = 0; i < 5; i++){
    //     console.log('in loop:' , i);
    // }
    // console.log('loop finished');

    // const names = ['liam', 'ben', 'debbie'];

    // for (let i = 0; i < names.length; i++) {
    //     let html = `<div>${names[i]}</div>`;
    //     console.log(html);
    // }

    // let i = 0;
    // while(i < names.length){
    //     console.log(names[i]);
    //     i++;
    // }

    // const password = 'passsssssaaaaaa';

    // if (password.length >= 12){
    //     console.log('very strong password');
    // }
    // else if (password.length >= 8){
    //     console.log('password ok');
    // }
    // else {
    //     console.log('password too short');
    // }
    
    // const password = 'pass';

    // if (password.length >= 12 && password.includes('@')) {
    //     console.log('very strong password');
    // }
    // else if (password.length >= 8 && password.includes('@')){
    //     console.log('strong password');
    // }
    // else if (password.length >= 8 || password.includes('@') && password.length >= 5){
    //     console.log('password ok');
    // }
    // else {
    //     console.log('password not strong enough');
    // }

    // let user = false;

    // if (!user) {
    //     console.log('you must be logged in to continue');
    // }
    // else {
    //     console.log('enter your password');
    // }

    // const scores = [50, 20, 0, 30, 100, 20, 10];

    // for (let i = 0; i < scores.length; i++){
    //     if (scores[i] === 0) {
    //         continue;
    //     }
    //     console.log('your score: ', scores[i]);

    //     if (scores[i] === 100) {
    //         console.log('Congrats! Top score!');
    //         break;
    //     }
    // }

    // const grade = 'B';

    // switch(grade) {
    //     case 'A':
    //         console.log('You got an A!');
    //         break;
    //     case 'B':
    //         console.log('You got a B!');
    //         break;
    //     case 'C':
    //         console.log('You got a C!');
    //         break;
    //     case 'D':
    //         console.log('You got a D.');
    //         break;
    //     case 'E':
    //         console.log('You got an E.');
    //         break;
    //     default:
    //         console.log('Not a valid grade.');
    // }

    // function welcome(){
    //     console.log('Welcome to the site');
    // }
    // welcome();

    // const welcome = function(){
    //     console.log('Welcome to the site');
    // };
    // welcome();

    // const speak = function(name = "Debbie", time = "night"){
    //     console.log(`Good ${time}, ${name}`);
    // };
    // speak();

    // const daisey = function(name = "Daisey", age = 7, colour = "brown, white and black"){
    //     console.log(`Hello ${name}, you are ${age} years old and you are ${colour} in colour.  Have a nice day.`);
    // };
    // daisey();
    // daisey("Willy", 10, "tabby");

// const calcArea = function(radius){
//     let area = 3.14 * radius ** 2;
//     return area;
// }
// const area = calcArea(5);
// console.log(area);

// const calcArea = function(radius){
//     return 3.14 * radius ** 2;
// }
// const area = calcArea(5);
// console.log(area);

// const calcArea = (radius) => {
//     return 3.14 * radius **2;
// };
// const area = calcArea(5);
// console.log(area);

// let people = ['liam', 'ben', 'debbie'];

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// };
// people.forEach(logPerson);

// const ul = document.querySelector('.people');

// const people = ['liam', 'ben', 'debbie'];

// let html = '';

// people.forEach(person => {
//     html += `<li style="color:purple">${person}</li>`;
// });
// console.log(html);
// ul.innerHTML = html;

// let user = {
//     name: 'Liam',
//     age: 33,
//     email: 'liam@gmail.com',
//     location: 'Sevilla',
//     blogs: [
//         {title: 'my travels', likes: 50},
//         {title: 'my 10 fav places', likes: 30}
//     ],
//     logBlogs: function(){
//         console.log('user has written:');
//         this.blogs.forEach(blog => {
//             console.log(blog.title);
//         console.log('this blog has:');
//         this.blogs.forEach(blog => {
//             console.log(`${blog.likes} likes`);
//         })
//         })
//     },
//     login(){
//         console.log('the user logged in');
//     },
//     loggout(){
//         console.log('the user logged out');
//     }
// };
// console.log(user);
// user.login();
// user.loggout();
// user.logBlogs();

// console.log(user.name);

// user.location = 'Swansea';
// console.log(user);

// console.log(Math);

// const random = Math.random();
// console.log(random);
// console.log(Math.round(random * 100));

// const paras = document.querySelectorAll('p');
// paras.forEach(p => {
//     if(p.textContent.includes('error')){
//         p.classList.add('error');
//     }
//     if(p.textContent.includes('success')){
//         p.classList.add('success');
//     }
// });

// let user = {
//     name: 'Liam',
//     age: 33,
//     location: 'Swansea',
//     blogs: [
//         {title : 'my blog', likes : 30},
//         {title : 'fav places', likes : 50}
//     ],
//     login() {
//         console.log('The user logged in')
//     },
//     logout() {
//         console.log('The user logged out')
//     },
//     logBlogs() {
//         console.log('The user has written:');
//         this.blogs.forEach(blog => {
//             console.log(`${blog.title} has got ${blog.likes} likes`);
//         })
//     }
// };
// user.logBlogs();

// user.age = 30;
// console.log(user);

// const heads = document.querySelectorAll('h2');
// heads.forEach(head => {
//     if(head.textContent.includes('@')){
//         head.classList.add('valid');
//     }
//     else {
//         head.classList.add('invalid');
//     }
// });

// let user = {
//     name: 'liam',
//     age: 33,
//     location: 'Swansea',
//     blogs: [
//         {title: 'blog1', likes: 35},
//         {title: 'blog2', likes: 55}
//     ],
//     login() {
//         console.log('The user logged in');
//     },
//     logout() {
//         console.log('The user logged out');
//     },
//     logBlogs() {
//         this.blogs.forEach(blog => {
//             console.log(`The user has written: ${blog.title}, which has ${blog.likes} likes.`)
//         })
//     }
// };

// console.log(user);
// user.logBlogs();

// const heads = document.querySelectorAll('h2');

// heads.forEach(head => {
//     if(head.textContent.includes('@')){
//         head.classList.add('valid');
//     }
//     else {
//         head.classList.add('invalid');
//     }
// });

// const searchBar = document.getElementById("searchBar");
// searchBar.addEventListener("keyup", e => {
//     const searchString = e.target.value;
// });

let greeting = 'Hi, ';
let name = 'Molly! ';
let message = 'Please check your order:';
let welcome = greeting + name + message;

let sign = 'Molly Place';
let tiles = sign.length;
let cost = tiles * 7;
let shipping = 5;
let total = cost + shipping;

let el = document.getElementById("greeting");
el.textContent = welcome;

let elTiles = document.getElementById("tiles");
elTiles.textContent = tiles;

let elCost = document.getElementById("cost");
elCost.textContent += cost;

let elShip = document.getElementById("shipping");
elShip.textContent += shipping;

let elTotal = document.getElementById("total");
elTotal.textContent += total;

/*function getSize(width, height, depth) {
    let area = width * height;
    let volume = width * height * depth;
    let sizes = [area, volume];
    return sizes;
}*/

/*areaOne = getSize(5, 10, 3)[0];
volumeOne = getSize(5, 10, 3)[1];
console.log(areaOne);
console.log(volumeOne);*/


// var greeting = "Hi ";
// var name = "James, ";
// var msg = "Please check your order:";
// var welcome = greeting + name + msg;

// var sign = "My Place";
// var tiles = sign.length;
// var cost = tiles * 10;
// var shipping = 6;
// var total = cost + shipping;

// var elGreet = document.getElementById("greeting");
// elGreet.textContent = welcome;

// var elTiles = document.getElementById("tiles");
// elTiles.textContent = tiles;

// var elCost = document.getElementById("cost");
// elCost.textContent += cost;

// var elShip = document.getElementById("shipping");
// elShip.textContent += shipping;

// var elTotal = document.getElementById("total");
// elTotal.textContent += total;

// function Hotel(name, rooms, booked) {
//     this.name = name;
//     this.rooms = rooms;
//     this.booked = booked;
//     this.checkAvailability = function() {
//         return this.rooms - this.booked;
//     };
// }

// let quayHotel = new Hotel('Quay', 50, 25);
// let parkHotel = new Hotel('Park', 100, 50);

// console.log(quayHotel.name);
// console.log(parkHotel.checkAvailability());

// const random = Math.random();
// console.log(Math.round(random * 100));

// const random = Math.random();
// console.log(Math.floor(random * 10));