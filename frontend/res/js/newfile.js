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

    const password = 'passsssssaaaaaa';

    if (password.length >= 12){
        console.log('very strong password');
    }
    else if (password.length >= 8){
        console.log('password ok');
    }
    else {
        console.log('password too short');
    }