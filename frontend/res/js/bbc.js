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
    // console.log(searchString);
  });

  let today = new Date();
  let todayShow = today.toDateString();

  let todayDate = document.querySelector('time');
  todayDate.textContent = todayShow;

  let modalBtn = document.getElementById("modal-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
modalBtn.onclick = function(){
  modal.style.display = "block"
}
closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}