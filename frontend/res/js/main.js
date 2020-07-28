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

    function addTen() {
        counter = counter + 10;
        outputCounter();
    }
    
    function removeTen() {
        if (counter > 9) {
        counter = counter - 10;
        outputCounter();
        }
    }

    function setHund() {
        counter = 100;
        outputCounter();
    }

    function addFive() {
        counter = counter + 5;
        outputCounter();
    }

    function removeFive() {
        if (counter > 4) {
            counter = counter - 5;
            outputCounter();
        }
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

    const buttonTen = document.getElementById("buttonTen");
    buttonTen.addEventListener("click", () => {
        addTen();
    });

    const buttonNegTen = document.getElementById("buttonNegTen");
    buttonNegTen.addEventListener("click", () => {
        removeTen();
    });

    const buttonHund = document.getElementById("buttonHund");
    buttonHund.addEventListener("click", () => {
        setHund();
    });

    const buttonFive = document.getElementById("buttonFive");
    buttonFive.addEventListener("click", () => {
        addFive();
    });

    const buttonNegFive = document.getElementById("buttonNegFive");
    buttonNegFive.addEventListener("click", () => {
        removeFive();
    });

    const buttonNewsletterSubmit = document.getElementById("newsletterSubmit");
    buttonNewsletterSubmit.addEventListener("click", async (e) => { 
        e.preventDefault();
        console.log("clicked");
        const emailInput = document.getElementById("email");
        const email = emailInput.value;
        console.log(email)
        const response = await fetch("/api/newsletter", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({ email }) // body data type must match "Content-Type" header
        });
        
        const data = await response.json(); // parses JSON response into native JavaScript objects
        console.log(data);
        if (data.success) {
            const successMessage = document.getElementById("successMessage");
            successMessage.style.display = "block";

        }
    })

});