let counter = 0;

window.addEventListener("load", () => { 
    const counterOutput = document.getElementById("counter");
    
    function outputCounter() {
        counterOutput.innerHTML = counter;
    }

    function addCounter(){
        counter = counter + 1;
        outputCounter();
    }

    function removeCounter(){
        if (counter > 0) {
        counter = counter - 1;
        outputCounter();
    }}

    const buttonAdd = document.getElementById("buttonAdd");
    buttonAdd.addEventListener("click", () => { 
        addCounter();

    const buttonRemove = document.getElementById("buttonRemove");
    buttonRemove.addEventListener("click", () => { 
        removeCounter();
    })})})

    /*const ul = document.querySelector("people");

    const people = ['liam', 'ben', 'spencer'];

    let html = ``;

    people.forEach(function(person) {
        html += `<li style="color:purple">${person}</li>`;
    });

    ul.innerHTML = html;
    console.log(html);*/