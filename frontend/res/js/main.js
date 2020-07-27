let counter = 0;

function addCounter(){
    const counterOutput = document.getElementById("counter");
    counter = counter + 1;
    counterOutput.innerHTML = counter;

}

window.addEventListener("load", () => {
    const button = document.getElementById("button");
    button.addEventListener("click", () => { 
        addCounter();
    });
});