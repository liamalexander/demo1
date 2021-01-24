window.onload = function() {
    const players = [{
      "id": 1,
      "name": "Federer",
      "slams": 20
    },
    {
      "id": 2,
      "name": "Nadal",
      "slams": 20
    },
    {
      "id": 3,
      "name": "Djokovic",
      "slams": 17
    }
  ];

  const playerList = document.getElementById("playerList");

  function createPlayer(player) {
    const playerWrapper = document.createElement("div");

    const nameTag = document.createElement("h2");
    nameTag.innerHTML = player.name;

    const slamsTag = document.createElement("p");
    slamsTag.innerHTML = player.slams;

    playerWrapper.appendChild(nameTag);
    playerWrapper.appendChild(slamsTag);

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
