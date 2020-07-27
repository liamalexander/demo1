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
        }
    }

    function resetCounter(){
        counter = 0;
        outputCounter();
    }
    
    
    const buttonAdd = document.getElementById("buttonAdd");
    buttonAdd.addEventListener("click", () => { 
        addCounter();
    });

    const buttonRemove = document.getElementById("buttonRemove");
    buttonRemove.addEventListener("click", () => { 
        removeCounter();
    });

    const buttonReset = document.getElementById("buttonReset");
    buttonReset.addEventListener("click", () => { 
        resetCounter();
    });

    const buttonNewsletterSubmit = document.getElementById("newsletterSubmit");
    buttonNewsletterSubmit.addEventListener("click", (e) => { 
        e.preventDefault();
        console.log("clicked");
        const emailInput = document.getElementById("email");
        const email = emailInput.value;
        console.log(email)
    });

});