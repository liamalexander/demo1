const wrestlerList = document.getElementById("wrestlerList");
let wrestlers = [
    {
        "id" : 1,
        "name" : "Stone Cold Steve Austin",
        "titles" : 10,
        "fans" : "face",
        "photo" : "https://staticg.sportskeeda.com/editor/2020/11/9d180-16044864190037-800.jpg",
        "nickname" : "The Rattlesnake"
    },
    {
        "id" : 2,
        "name" : "The Rock",
        "titles" : 12,
        "fans" : "face",
        "photo" : "https://staticg.sportskeeda.com/editor/2018/08/b3e15-1535020634-800.jpg",
        "nickname" : "The People's Champ"
    },
    {
        "id" : 3,
        "name" : "The Undertaker",
        "titles" : 6,
        "fans" : "heel",
        "photo" : "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/02/16/791950-744141-undertaker.jpg",
        "nickname" : "The Deadman"
    },
    {
        "id" : 4,
        "name" : "Kane",
        "titles" : 1,
        "fans" : "heel",
        "photo" : "https://64.media.tumblr.com/1fb7dbde89b5d09a702749956cd8d1a7/tumblr_ouliz2qUkt1rmv1vdo1_500.png",
        "nickname" : "The Big Red Machine"
    },
    {
        "id" : 5,
        "name" : "Mankind",
        "titles" : 4,
        "fans" : "face",
        "photo" : "https://metro.co.uk/wp-content/uploads/2020/07/Mankind-29d4.jpg?quality=90&strip=all&crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630",
        "nickname" : "Mrs Foley's Baby Boy"
    },
    {
        "id" : 6,
        "name" : "Chyna",
        "titles" : 2,
        "fans" : "face",
        "photo" : "https://pbs.twimg.com/media/D5awFQ2UYAAkKnD.jpg",
        "nickname" : "The 9th Wonder Of The World"
    },
    {
        "id" : 7,
        "name" : "HHH",
        "titles" : 15,
        "fans" : "heel",
        "photo" : "https://www.onlineworldofwrestling.com/wp-content/uploads/2012/06/Triple-H-2.jpeg",
        "nickname" : "The Game"
    },
    {
        "id" : 8,
        "name" : "Mr McMahon",
        "titles" : 2,
        "fans" : "heel",
        "photo" : "https://thesportsheadquarters.com/wp-content/uploads/2020/12/McMahon.jpg",
        "nickname" : "The Owner"
    },
]

wrestlers.forEach(wrestler => {
    const wrestlerCard = document.createElement("div");
    wrestlerList.appendChild(wrestlerCard);
    const wrestlerImage = document.createElement("img");
    wrestlerImage.src = wrestler.photo;
    const nameTag = document.createElement("h2");
    nameTag.innerHTML = wrestler.name;
    const titlesWon = document.createElement("p");
    titlesWon.innerHTML = wrestler.nickname + " won "  + wrestler.titles + " titles";
    wrestlerCard.appendChild(wrestlerImage);
    wrestlerCard.appendChild(nameTag);
    wrestlerCard.appendChild(titlesWon);

    if (wrestler.fans === "face") {
        wrestlerCard.classList.add("faceCard");
    } else {
        wrestlerCard.classList.add("wrestlerCard");
    }
});