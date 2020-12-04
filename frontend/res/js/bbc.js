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

//HERE IS THE OLD WORKING MODAL FOR FED

// let modalBtn = document.getElementById("modal-btn")
// let modal = document.querySelector(".modal")
// let closeBtn = document.querySelector(".close-btn")
// modalBtn.onclick = function(){
//   modal.style.display = "block"
// }
// closeBtn.onclick = function(){
//   modal.style.display = "none"
// }
// window.onclick = function(e){
//   if(e.target == modal){
//     modal.style.display = "none"
//   }
// }

//UNBLOCK ALL ABOVE TO GET OLD WORKING MODAL FOR FED

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

// let modalBtn = document.getElementsByTagName("button[i]");
// let modal = document.querySelectorAll(".modal");
// let closeBtn = document.querySelectorAll(".close-btn");
// let target = e.target;
// modalBtn.onclick = function() {
//   modal.style.display = "block";
// }

// var btn = document.querySelectorAll("button");

// // All page modals
// var modals = document.querySelectorAll('.modal');

// // Get the <span> element that closes the modal
// var spans = document.getElementsByClassName("close-btn");

// // When the user clicks the button, open the modal
// for (var i = 0; i < btn.length; i++) {
//  btn[i].onclick = function(e) {
//     e.preventDefault();
//     modal = document.querySelector(e.target.getAttribute("href"));
//     modal.style.display = "block";
//  }
// }

// // When the user clicks on <span> (x), close the modal
// for (var i = 0; i < spans.length; i++) {
//  spans[i].onclick = function() {
//     for (var index in modals) {
//       if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
//     }
//  }
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target.classList.contains('modal')) {
//      for (var index in modals) {
//       if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
//      }
//     }
// }