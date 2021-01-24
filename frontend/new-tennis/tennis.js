window.onload = function() {
    const players = [{
      "id": 1,
      "name": "Federer",
      "slams": 20,
      "nationality": "Swiss",
      "photo" : "https://img.bleacherreport.net/img/images/photos/003/875/482/hi-res-1d5a1ec4eb5852753d70a62c8d584f47_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top"
    },
    {
      "id": 2,
      "name": "Nadal",
      "slams": 20,
      "nationality": "Spanish",
      "photo" : "https://sportshub.cbsistatic.com/i/r/2018/06/04/3d569d5c-1f54-498c-ad78-c3085de74dff/thumbnail/1200x675/05771c3e07c9e82b703b23060170ccb3/rafael-nadal.jpg"
    },
    {
      "id": 3,
      "name": "Djokovic",
      "slams": 17,
      "nationality": "Serbian",
      "photo" : "https://www.tennisworldusa.org/imgb/95388/-both-rafael-nadal-and-novak-djokovic-are-a-stone-says-spaniard-player.jpg"
    },
    {
      "id": 4,
      "name": "Sampras",
      "slams": 14,
      "nationality": "American",
      "photo" : "https://cdn.britannica.com/85/205585-050-94EFDBDB/Pete-Sampras-men-singles-championship-Wimbledon-sets-1998.jpg"
    },
    {
      "id": 5,
      "name": "Borg",
      "slams": 11,
      "nationality": "Swedish",
      "photo" : "https://cdn0.scrvt.com/c2465e9022ba946df66d1244a69b1c75/1e95d6daf9a48579/e1556565a2e4/v/4a024e1b7ee3/1980_Wimbledon.jpg"
    },
    {
      "id": 6,
      "name": "Connors",
      "slams": 8,
      "nationality": "American",
      "photo" : "https://static01.nyt.com/images/2013/06/02/books/review/02connors/02connors-superJumbo.jpg"
    }
  ];

  const playerList = document.getElementById("playerList");

  function createPlayer(player) {
    const playerWrapper = document.createElement("div");

    const nameTag = document.createElement("h2");
    nameTag.innerHTML = player.name;

    const nationalityTag = document.createElement("h4");
    nationalityTag.innerHTML = player.nationality;

    const slamsTag = document.createElement("p");
    slamsTag.innerHTML = "Grand Slams: " + player.slams;

    const playerImage = document.createElement("img");
    playerImage.src = player.photo;

    playerWrapper.appendChild(nameTag);
    playerWrapper.appendChild(nationalityTag);
    playerWrapper.appendChild(slamsTag);
    playerWrapper.appendChild(playerImage);

    return playerWrapper;
  }
  
  function displayPlayers() {
    for(const player of players) {
      const nameTag = createPlayer(player);
      playerList.appendChild(nameTag);
    }
  }

  function filteredPlayers(e) {
    playerList.innerHTML = "";

    const value = e.target.value.toLowerCase();
    // if not input - display players 
    if (value.length === 0) {
      displayPlayers();
    }

    if (value.length > 0) {
      for (const player of players) {
        const name = player.name.toLowerCase();
        if (name.includes(value)) {
          const nameTag = createPlayer(player);
          playerList.appendChild(nameTag);
        }
      }
    }
    
  }

  function addHandlers() {
    const searchInput = document.getElementById("searchBar");
    searchInput.addEventListener("keyup", filteredPlayers, false);
  }

  function init() {
    displayPlayers();
    addHandlers();
  }

  init();

}
