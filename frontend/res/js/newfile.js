let counter = 0;

window.addEventListener("load", () => {
    const counterOutput = document.getElementById("counter");
    
    function outputCounter() {
        counterOutput.innerHTML = counter;
    }

    function addCounter() {
        counter = counter + 1;
        outputCounter();
    }

    const buttonAdd = document.getElementById("buttonAdd");
    buttonAdd.addEventListener("click", () => {
        addCounter();
    }});
