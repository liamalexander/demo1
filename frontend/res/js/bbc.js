function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  const searchBar = document.getElementById("searchBar");
  searchBar.addEventListener("keyup", e => {
    const searchString = e.target.value;
    return(searchString);
    // console.log(searchString);
  });
console.log(searchString);