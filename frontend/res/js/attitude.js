const wrestlerList = document.getElementById("wrestlerList");
let wrestlers = [
    {
        "id" : 1,
        "name" : "Stone Cold Steve Austin",
        "titles" : 10,
        "fans" : "face"
    },
    {
        "id" : 2,
        "name" : "The Rock",
        "titles" : 12,
        "fans" : "face"
    },
    {
        "id" : 3,
        "name" : "The Undertaker",
        "titles" : 6,
        "fans" : "heel"
    },
    {
        "id" : 4,
        "name" : "Kane",
        "titles" : 1,
        "fans" : "heel"
    }
]

wrestlers.forEach(wrestler => {
    const wrestlerCard = document.createElement("div");
    // wrestlerCard.classList.add("wrestlerCard");
    wrestlerList.appendChild(wrestlerCard);

    const nameTag = document.createElement("h2");
    nameTag.innerHTML = wrestler.name;
    const titlesWon = document.createElement("p");
    titlesWon.innerHTML = wrestler.titles + " title wins"
    wrestlerCard.appendChild(nameTag);
    wrestlerCard.appendChild(titlesWon);

    if (wrestler.fans === "face") {
        wrestlerCard.classList.add("faceCard");
    } else {
        wrestlerCard.classList.add("wrestlerCard");
    }
});