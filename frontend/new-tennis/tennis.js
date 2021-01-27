window.onload = function() {
    const players = [{
      "id": 1,
      "name": "Federer",
      "slams": 20,
      "nationality": "Swiss",
      "photo" : "https://pbs.twimg.com/profile_images/378800000606046005/3f05655ac9b76e73eb3e86f9d5d3b2cd.jpeg"
    },
    {
      "id": 2,
      "name": "Nadal",
      "slams": 20,
      "nationality": "Spanish",
      "photo" : "https://static.wixstatic.com/media/58baea_bdd0df59261642a8858efd670143ea12~mv2.jpg/v1/fill/w_128,h_128,al_c,q_80,usm_0.66_1.00_0.01/Nadal%20Forehand%20Blog.webp"
    },
    {
      "id": 3,
      "name": "Djokovic",
      "slams": 17,
      "nationality": "Serbian",
      "photo" : "https://cdnmd.lavoz.com.ar/sites/default/files/styles/box_128/public/nota_periodistica/nole1_1602102173.jpg"
    },
    {
      "id": 4,
      "name": "Sampras",
      "slams": 14,
      "nationality": "American",
      "photo" : "https://static.wixstatic.com/media/58baea_6824fafaf67e49a28cf5de8645aeced6~mv2.jpg/v1/fill/w_128,h_128,al_c,q_80,usm_0.66_1.00_0.01/Sampras%20Volley.webp"
    },
    {
      "id": 5,
      "name": "Borg",
      "slams": 11,
      "nationality": "Swedish",
      "photo" : "https://s.err.ee/photo/crop/2018/09/01/541464h879ft4.jpg"
    },
    {
      "id": 6,
      "name": "Connors",
      "slams": 8,
      "nationality": "American",
      "photo" : "https://pbs.twimg.com/profile_images/313878886/chris-_20jimmy_20connors250x238_reasonably_small.jpg"
    },
    {
      "id": 7,
      "name": "Lendl",
      "slams": 8,
      "nationality": "Czech",
      "photo" : "https://res.cloudinary.com/lptennis/image/upload/c_fill,h_96,q_auto,w_96/v1482781330/wkjjx0hd7jfqu5hz1epa.png"
    },
    {
      "id": 8,
      "name": "Agassi",
      "slams": 8,
      "nationality": "American",
      "photo" : "https://laterradihayk.files.wordpress.com/2016/06/andre-agassi1.jpg?w=256&h=256&crop=1"
    },
    {
      "id": 9,
      "name": "McEnroe",
      "slams": 7,
      "nationality": "American",
      "photo" : "https://media.gq.com/photos/5583173409f0bee564411591/master/pass/sports-2011-06-wimbeldon-rivalries-wimbeldon-bjorn-borg-john-mcenroe_96.jpg"
    },
    {
      "id": 10,
      "name": "Wilander",
      "slams": 7,
      "nationality": "Swedish",
      "photo" : "https://cdn.cnn.com/cnnnext/dam/assets/150428170726-mats-wilander-french-final-large-169.jpg"
    },
    {
      "id": 11,
      "name": "S Williams",
      "slams": 23,
      "nationality": "American",
      "photo" : "https://www.thenationalnews.com/image/policy:1.961163:1578402656/1197977164.jpg?f=1x1&w=128&$p$f$w=f2afc36"
    },
    {
      "id": 12,
      "name": "Graf",
      "slams": 22,
      "nationality": "German",
      "photo" : "https://www.larousse.fr/encyclopedie/data/vignettes/1003786-Steffi_Graf.jpg"
    },
    {
      "id": 13,
      "name": "Evert",
      "slams": 18,
      "nationality": "American",
      "photo" : "https://photoresources.wtatennis.com/photo-resources/2020/03/28/44d0dbdc-5568-4eb1-8c43-914630cfd4a2/gettyimages-667510641-594x594.jpg?width=1200&height=630"
    },
    {
      "id": 14,
      "name": "Navratilova",
      "slams": 18,
      "nationality": "Czech",
      "photo" : "https://www.tennisworldusa.org/imgb/52642/martina-navratilova-i-am-who-i-am.jpg"
    },
    {
      "id": 15,
      "name": "Court",
      "slams": 11,
      "nationality": "Australian",
      "photo" : "https://s31242.pcdn.co/wp-content/uploads/2019/06/GettyImages-3309293-1024x701.jpg"
    },
    {
      "id": 16,
      "name": "Seles",
      "slams": 9,
      "nationality": "Yugoslavian",
      "photo" : "https://tt.tennis-warehouse.com/data/avatars/m/101/101018.jpg?1447434303"
    },
    {
      "id": 17,
      "name": "King",
      "slams": 8,
      "nationality": "American",
      "photo" : "https://img.thedailybeast.com/image/upload/dpr_2.0/c_crop,h_413,w_413,x_121,y_0/c_limit,w_128/d_placeholder_euli9k,fl_lossy,q_auto/v1501718211/1378802776786.cached_yghpwm"
    },
    {
      "id": 18,
      "name": "Goolagong",
      "slams": 7,
      "nationality": "Australian",
      "photo" : "https://cdn.cnn.com/cnnnext/dam/assets/150128093940-evonne-goolagong-wimbledon-playing-super-169.jpg"
    },
    {
      "id": 19,
      "name": "V Williams",
      "slams": 7,
      "nationality": "American",
      "photo" : "https://static.ffx.io/images/$zoom_0.1309317630758573%2C$multiply_0.254%2C$ratio_1%2C$width_378%2C$x_57%2C$y_0/t_crop_custom/q_86%2Cf_auto/cb6f74032d6703dbe16bff5ef2a332ad57f1e232"
    },
    {
      "id": 20,
      "name": "Henin",
      "slams": 7,
      "nationality": "Belgian",
      "photo" : "https://i.guim.co.uk/img/static/sys-images/Sport/Pix/pictures/2006/01/24/Heninsm.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=3cb3aec94aa780b82bb146b613cecb26"
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
        const nation = player.nationality.toLowerCase();
        if (name.includes(value) || nation.includes(value)) {
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
