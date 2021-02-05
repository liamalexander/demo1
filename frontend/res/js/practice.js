window.onload = function() {
    const players = [{
      "id": 1,
      "name": "Federer",
      "slams": 20,
      "nationality": "Swiss",
      "photo" : "https://pbs.twimg.com/profile_images/378800000606046005/3f05655ac9b76e73eb3e86f9d5d3b2cd.jpeg",
      "dob" : "08 / 08 / 81",
      "firstSlam": "Wimbledon 2003",
      "lastSlam": "Australian Open 2018",
      "titles": 103,
      "text": "Federer has won a men's record 20 Grand Slam singles titles.",
      "aus": 6,
      "fre": 1,
      "wim": 8,
      "uso": 5,
      "modalPhoto": "https://images.indianexpress.com/2020/04/federer-wimbledon-1200.jpg"
    },
    {
      "id": 2,
      "name": "Nadal",
      "slams": 20,
      "nationality": "Spanish",
      "photo" : "https://static.wixstatic.com/media/58baea_bdd0df59261642a8858efd670143ea12~mv2.jpg/v1/fill/w_128,h_128,al_c,q_80,usm_0.66_1.00_0.01/Nadal%20Forehand%20Blog.webp",
      "dob" : "03 / 06 / 86",
      "firstSlam": "French Open 2005",
      "lastSlam": "French Open 2020",
      "titles": 86,
      "text": "Nadal has won 13 French Open titles, more than any player at any Grand Slam event.",
      "aus": 1,
      "fre": 13,
      "wim": 2,
      "uso": 4,
      "modalPhoto": "https://www.tennisnow.com/images/2017/June/Nadaltrophy-6-11-17.aspx"
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
      playerWrapper.classList.add(".player-card");
      playerWrapper.setAttribute("id", player.id);
      // playerWrapper.childNodes.setAttribute("id", player.id);
      // playerWrapper.children.setAttribute("id", player.id);

      // // playerWrapper.classList.add(".modal-open");

      // // function createModal() {
      // //       const modalWrapper = document.getElementsByClassName(".player-modal");
      // //       // modalWrapper.classList.add("modal-wrapper");
    
      // //       const modalHead = document.createElement("h3");
      // //       modalHead.innerHTML = player.name;
    
      // //       const closeBtns = document.createElement("span");
      // //       closeBtns.innerHTML = "x";
      // //       closeBtns.classList.add(".close-btns");
    
      // //       const playerStats = document.createElement("p");
      // //       playerStats.innerHTML = "Born: " + player.dob + "<br>" + "nationality: " + player.nationality + "<br>" + "First Slam: " + player.firstSlam + "<br>" + "Last Slam: " + player.lastSlam + "<br>" + "Total Slams: " + player.slams + "<br>" + "Total Titles: " + player.titles;
      // //       playerStats.classList.add(".modal-stats");
    
      // //       const playerText = document.createElement("p");
      // //       playerText.innerHTML = player.text;
      // //       playerText.classList.add(".modal-text");
    
      // //       const modalTable = document.createElement("table");
      // //       modalTable.innerHTML = "";
      // //       modalTable.classList.add(".modal-table");
    
      // //       const modalImage = document.createElement("img");
      // //       modalImage.src = player.modalPhoto;
      // //       modalImage.classList.add(".modal-img");

      // //       return modalWrapper;
      //   }

        // playerWrapper.addEventListener("click", function() {
        // alert("modal working")})
  
      return playerWrapper;
    };



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
          const nation = player.nationality.toLowerCase();
          if (name.includes(value) || nation.includes(value)) {
            const nameTag = createPlayer(player);
            playerList.appendChild(nameTag);
          }
        }
      }
      
    }
  
// const modalTriggers = document.querySelectorAll(".player-card");

function openModal(e) {
  const modal = e.target.getAttribute("id");
  players.forEach(player => {
    if (modal === player.id) {
      console.log(player.name);
    }
  });
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

// const modalTriggers = document.querySelectorAll(".player-card");

// function openModal(e) {
  // const target = e.target;
  // const modal = target.target.getAttribute("name");
  // players.forEach(player => {
  //   if (modal === player.id) {
    //   console.log(player.name);
    // }
  // });
// }

// modalTriggers.addEventListener("click", openModal(), false);

const modalTriggers = document.getElementById("playerList");
modalTriggers.addEventListener("click", (e) => {
    // console.log(e.target.getAttribute("id"));
    if (e.target.getAttribute("id") === players.player.id) {
      console.log(player.name);
    }
});
// console.log(modalTriggers);