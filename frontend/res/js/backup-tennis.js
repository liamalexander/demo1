//Change into 1 function for both incorrect, add class to each instead of id and put all the changes into css
// with addClass / attribute to make the code shorter
// add each 3 answers in each q to an array to make it only 1 function?
const accordion = document.getElementsByClassName("contentBox");

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle("active")
    })
}

function changeColour() {
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

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn1')) {
        var dropdowns = document.getElementsByClassName("dropdown-content1");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn2')) {
        var dropdowns = document.getElementsByClassName("dropdown-content2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn3')) {
        var dropdowns = document.getElementsByClassName("dropdown-content3");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn4')) {
        var dropdowns = document.getElementsByClassName("dropdown-content4");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function myFunction5() {
    document.getElementById("myDropdown5").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn5')) {
        var dropdowns = document.getElementsByClassName("dropdown-content5");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

const searchbar = document.getElementById("searchBar");

function togglePlayerCard(playerCard, state) {
    playerCard.style.display = state ? "grid" : "none";
}

function searchPlayer(e) {
    const input = e.target.value.toLowerCase();

    let playerCards = document.getElementsByClassName("player");

    for (let player of playerCards) {
        const playerNameTag = player.getElementsByClassName("name")[0]
        const playerName = playerNameTag.innerHTML.toLowerCase();

        if (playerName.includes(input)) {
            togglePlayerCard(player, true);
        } else {
            togglePlayerCard(player, false);
        }
    }
}

searchbar.addEventListener("keyup", searchPlayer, false);

let modalBtns = document.querySelectorAll(".modal-open");

modalBtns.forEach(function(btn) {
    btn.onclick = function() {
        let modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
    };
});

let closeBtns = document.querySelectorAll(".close-btn");

closeBtns.forEach(function(btn) {
    btn.onclick = function() {
        let modal = (btn.closest(".modal").style.display = "none");
    };
});

window.onclick = function(e) {
    if (e.target.className === "modal") {
        e.target.style.display = "none";
    }
};
function showPanel(panelIndex, colorCode) {
let tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
let tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

// function showPanel(panelIndex, colorCode) {
    tabButtons.forEach(function(node) {
        node.style.backgroundColor= "";
        node.style.color = "";
    });
    tabButtons[panelIndex].style.backgroundColor = colorCode;
    tabButtons[panelIndex].style.color = "white";
    tabPanels.forEach(function(node) {
        node.style.display = "none";
    });
    tabPanels[panelIndex].style.display = "block";
    tabPanels[panelIndex].style.backgroundColor = colorCode;
};
// body.onload = "showPanel(0, '#03befc')";
showPanel(0, '#03befc');