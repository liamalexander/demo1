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

var hotel = {
    name: "Park",
    roomRate: 240,
    discount: 15,
    offerPrice: function() {
        var offerRate = this.roomRate * ((100 - this.discount) / 100);
        return offerRate;
    }
}

var hotelName, roomRate, specialRate;

hotelName = document.getElementById("hotelName");
roomRate = document.getElementById("roomRate");
specialRate = document.getElementById("specialRate");

hotelName.textContent = hotel.name;
roomRate.textContent += '£' + hotel.roomRate.toFixed(2);
specialRate.textContent += '£' + hotel.offerPrice().toFixed(2);

var expiryMsg;
var today;
var elEnds;

function offerExpires(today) {
    var weekFromToday, day, date, month, year, dayNames, monthNames;
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    monthNames = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 
    'September', 'October', 'November', 'December'];
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();

    expiryMsg = 'Offer expires next ';
    expiryMsg += day + ' ' + ( `${+date} ${month} ${year}`);
    return expiryMsg;
}

today = new Date();
elEnds = document.getElementById("offerEnds");
elEnds.textContent = offerExpires(today);

// let ans1a = document.getElementById("ans1a");
// let ans1b = document.getElementById("ans1b");
// let correctAns1 = document.getElementById("corerctAns1");

function changeColour() {
    // document.getElementById("and1a").style.backgroundColor = "red";
    const wrongA = document.getElementById("ans1a");
    wrongA.style.backgroundColor = "red";
    wrongA.disabled = true;
    const incorrectMsg = document.getElementById("answer");
    incorrectMsg.textContent = "Incorrect!";
    incorrectMsg.textContent += " Federer has won 8 titles (2003-2007, 2009, 2012, 2017)";
    incorrectMsg.style.color = "red";
    const wrongB = document.getElementById("ans1b").disabled = true;
    const showCorrect1 = document.getElementById("correctAns1");
    showCorrect1.style.backgroundColor = "green";
    showCorrect1.disabled = true;
    // window.setTimeout("yourFunction()", 10000);
}
function changeCorrect() {
    const correct1 = document.getElementById("correctAns1");
    correct1.style.backgroundColor = "green";
    correct1.disabled = true;
    const correctMsg = document.getElementById("answer");
    correctMsg.textContent = "Correct!";
    correctMsg.textContent += " Federer has won 8 titles (2003-2007, 2009, 2012, 2017)";
    correctMsg.style.color = "green";
    const wrongA = document.getElementById("ans1a").disabled = true;
    const wrongB = document.getElementById("ans1b").disabled = true;
}

function changeColour1() {
    const wrongB = document.getElementById("ans1b");
    wrongB.style.backgroundColor = "red";
    wrongB.disabled = true;
    const incorrectMsg = document.getElementById("answer");
    incorrectMsg.textContent = "Incorrect!";
    incorrectMsg.textContent += " Federer has won 8 titles (2003-2007, 2009, 2012, 2017)";
    incorrectMsg.style.color = "red";
    const wrongA = document.getElementById("ans1a").disabled = true;
    const showCorrect1 = document.getElementById("correctAns1");
    showCorrect1.style.backgroundColor = "green";
    showCorrect1.disabled = true;
}

function changeColour2() {
    const wrong2A = document.getElementById("ans2a");
    wrong2A.style.backgroundColor = "red";
    wrong2A.disabled = true;
    const incorrectMsg2 = document.getElementById("answer2");
    incorrectMsg2.textContent = "Incorrect!";
    incorrectMsg2.textContent += " Nadal has lost 2 completed matches (2009 vs Soderling, 2015 vs Djokovic)";
    incorrectMsg2.style.color = "red";
    const wrong2C = document.getElementById("ans2c").disabled = true;
    const showCorrect2 = document.getElementById("correctAns2");
    showCorrect2.style.backgroundColor = "green";
    showCorrect2.disabled = true;
}

function changeCorrect2() {
    const correct2 = document.getElementById("correctAns2");
    correct2.style.backgroundColor = "green";
    correct2.disabled = true;
    const correct2Msg = document.getElementById("answer2");
    correct2Msg.textContent = "Correct!";
    correct2Msg.textContent += " Nadal has lost 2 completed matches (2009 vs Soderling, 2015 vs Djokovic)";
    correct2Msg.style.color = "green";
    const wrong2A = document.getElementById("ans2a").disabled = true;
    const wrong2C = document.getElementById("ans2c").disabled = true;
}

function changeColour2c() {
    const wrong2C = document.getElementById("ans2c");
    wrong2C.style.backgroundColor = "red";
    wrong2C.disabled = true;
    const incorrectMsg2 = document.getElementById("answer2");
    incorrectMsg2.textContent = "Incorrect!";
    incorrectMsg2.textContent += " Nadal has lost 2 completed matches (2009 vs Soderling, 2015 vs Djokovic)";
    incorrectMsg2.style.color = "red";
    const wrong2A = document.getElementById("ans2a").disabled = true;
    const showCorrect2 = document.getElementById("correctAns2");
    showCorrect2.style.backgroundColor = "green";
    showCorrect2.disabled = true;
}

function changeColour3() {
    const wrong3A = document.getElementById("ans3a");
    wrong3A.style.backgroundColor = "red";
    wrong3A.disabled = true;
    const incorrectMsg2 = document.getElementById("answer3");
    incorrectMsg2.textContent = "Incorrect!";
    incorrectMsg2.textContent += " Navratilova won half of her Grand Slam singles titles at Wimbledon";
    incorrectMsg2.style.color = "red";
    const wrong3C = document.getElementById("ans3c").disabled = true;
    const showCorrect3 = document.getElementById("correctAns3");
    showCorrect3.style.backgroundColor = "green";
    showCorrect3.disabled = true;
}

function changeCorrect3() {
    const correct3 = document.getElementById("correctAns3");
    correct3.style.backgroundColor = "green";
    correct3.disabled = true;
    const correct3Msg = document.getElementById("answer3");
    correct3Msg.textContent = "Correct!";
    correct3Msg.textContent += " Navratilova won half of her Grand Slam singles titles at Wimbledon";
    correct3Msg.style.color = "green";
    const wrong3A = document.getElementById("ans3a").disabled = true;
    const wrong3C = document.getElementById("ans3c").disabled = true;
}

function changeColour3c() {
    const wrong3C = document.getElementById("ans3c");
    wrong3C.style.backgroundColor = "red";
    wrong3C.disabled = true;
    const incorrectMsg3 = document.getElementById("answer3");
    incorrectMsg3.textContent = "Incorrect!";
    incorrectMsg3.textContent += " Navratilova won half of her Grand Slam singles titles at Wimbledon";
    incorrectMsg3.style.color = "red";
    const wrong3A = document.getElementById("ans3a").disabled = true;
    const showCorrect3 = document.getElementById("correctAns3");
    showCorrect3.style.backgroundColor = "green";
    showCorrect3.disabled = true;
}

function changeCorrect4() {
    const correct4 = document.getElementById("correctAns4");
    correct4.style.backgroundColor = "green";
    correct4.disabled = true;
    const correct4Msg = document.getElementById("answer4");
    correct4Msg.textContent = "Correct!";
    correct4Msg.textContent += " Chrissy won seven singles titles at the French Open";
    correct4Msg.style.color = "green";
    const wrong4B = document.getElementById("ans4b").disabled = true;
    const wrong4C = document.getElementById("ans4c").disabled = true;
}

function changeColour4() {
    const wrong4B = document.getElementById("ans4b");
    wrong4B.style.backgroundColor = "red";
    wrong4B.disabled = true;
    const incorrect4Msg = document.getElementById("answer4");
    incorrect4Msg.textContent = "Incorrect!";
    incorrect4Msg.textContent += " Chrissy won seven singles titles at the French Open";
    incorrect4Msg.style.color = "red";
    const wrong4C = document.getElementById("ans4c").disabled = true;
    const showCorrect4 = document.getElementById("correctAns4");
    showCorrect4.style.backgroundColor = "green";
    showCorrect4.disabled = true;
}

function changeColour4c() {
    const wrong4C = document.getElementById("ans4c");
    wrong4C.style.backgroundColor = "red";
    wrong4C.disabled = true;
    const incorrect4Msg = document.getElementById("answer4");
    incorrect4Msg.textContent = "Incorrect!";
    incorrect4Msg.textContent += " Chrissy won seven singles titles at the French Open";
    incorrect4Msg.style.color = "red";
    const wrong4B = document.getElementById("ans4b").disabled = true;
    const showCorrect4 = document.getElementById("correctAns4");
    showCorrect4.style.backgroundColor = "green";
    showCorrect4.disabled = true;
}

function changeColour5() {
    const wrongA = document.getElementById("ans5a");
    wrongA.style.backgroundColor = "red";
    wrongA.disabled = true;
    const incorrect5Msg = document.getElementById("answer5");
    incorrect5Msg.textContent = "Incorrect!";
    incorrect5Msg.textContent += " Steffi Graf is the only player, male or female to achieve Calender Year Golden Slam";
    incorrect5Msg.style.color = "red";
    const wrongB = document.getElementById("ans5b").disabled = true;
    const showCorrect5 = document.getElementById("correctAns5");
    showCorrect5.style.backgroundColor = "green";
    showCorrect5.disabled = true;
}

function changeCorrect5() {
    const correct5 = document.getElementById("correctAns5");
    correct5.style.backgroundColor = "green";
    correct5.disabled = true;
    const correct5Msg = document.getElementById("answer5");
    correct5Msg.textContent = "Correct!";
    correct5Msg.textContent += " Steffi Graf is the only player, male or female to achieve Calender Year Golden Slam";
    correct5Msg.style.color = "green";
    const wrongA = document.getElementById("ans5a").disabled = true;
    const wrongB = document.getElementById("ans5b").disabled = true;
}

function changeColour5b() {
    const wrongB = document.getElementById("ans5b");
    wrongB.style.backgroundColor = "red";
    wrongB.disabled = true;
    const incorrect5Msg = document.getElementById("answer5");
    incorrect5Msg.textContent = "Incorrect!";
    incorrect5Msg.textContent += " Steffi Graf is the only player, male or female to achieve Calender Year Golden Slam";
    incorrect5Msg.style.color = "red";
    const wrongA = document.getElementById("ans5a").disabled = true;
    const showCorrect5 = document.getElementById("correctAns5");
    showCorrect5.style.backgroundColor = "green";
    showCorrect5.disabled = true;
}

function changeCorrect6() {
    const correct6 = document.getElementById("correctAns6");
    correct6.style.backgroundColor = "green";
    correct6.disabled = true;
    const correct6Msg = document.getElementById("answer6");
    correct6Msg.textContent = "Correct!";
    correct6Msg.textContent += " Graf won every major tournament in 1988, winning her only Olympic Gold Medal in Seoul";
    correct6Msg.style.color = "green";
    const wrong6B = document.getElementById("ans6b").disabled = true;
    const wrong6C = document.getElementById("ans6c").disabled = true;
}

function changeColour6() {
    const wrong6B = document.getElementById("ans6b");
    wrong6B.style.backgroundColor = "red";
    wrong6B.disabled = true;
    const incorrect6Msg = document.getElementById("answer6");
    incorrect6Msg.textContent = "Incorrect!";
    incorrect6Msg.textContent += " Graf won every major tournament in 1988, winning her only Olympic Gold Medal in Seoul";
    incorrect6Msg.style.color = "red";
    const wrong6C = document.getElementById("ans6c").disabled = true;
    const showCorrect6 = document.getElementById("correctAns6");
    showCorrect6.style.backgroundColor = "green";
    showCorrect6.disabled = true;
}

function changeColour6c() {
    const wrong6C = document.getElementById("ans6c");
    wrong6C.style.backgroundColor = "red";
    wrong6C.disabled = true;
    const incorrect6Msg = document.getElementById("answer6");
    incorrect6Msg.textContent = "Incorrect!";
    incorrect6Msg.textContent += " Graf won every major tournament in 1988, winning her only Olympic Gold Medal in Seoul";
    incorrect6Msg.style.color = "red";
    const wrong6B = document.getElementById("ans6b").disabled = true;
    const showCorrect6 = document.getElementById("correctAns6");
    showCorrect6.style.backgroundColor = "green";
    showCorrect6.disabled = true;
}