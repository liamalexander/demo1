window.onload = () => {
    const wrestlers = [{
        "id": 1,
        "name": "Stone Cold Steve Austin",
        "titles": 10
    }, 
    {
        "id": 1,
        "name": "The Rock",
        "titles": 12
    }, 
    {
        "id": 3,
        "name": "The Undertaker",
        "titles": 8
    }, 
    {
        "id": 4,
        "name": "Mankind",
        "titles": 6
    }, 
    {
        "id": 5,
        "name": "Kane",
        "titles": 4
    }, 
    {
        "id": 6,
        "name": "Vince McMahon",
        "titles": 1
    }, 
    {
        "id": 7,
        "name": "HHH",
        "titles": 16
    }, 
    {
        "id": 8,
        "name": "Chyna",
        "titles": 2
    }
];
}

const createWrestlerCard = (wrestler) => {
    const nameTag = document.createElement("h2");
    const titleWins = document.createElement("p");
    const wrestlerCard = document.getElementById("wrestlerList");

    nameTag.innerHTML = wrestler.name;
    titleWins.innerHTML = wrestler.titles;

    wrestlerCard.appendChild(nameTag);
    wrestlerCard.appendChild(titleWins);

    wrestlerCard.setAttribute("data-id", wrestler.id);

    console.log("wrestlerCard");

    return wrestlerCard;
};