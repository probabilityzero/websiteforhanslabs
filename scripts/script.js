const openSound = new Audio('../assets/waterdrop.mp3');
const closeSound = new Audio('../assets/waterdrop.mp3');
const hamburger = document.querySelector('.toggle-menu')
const menu = document.getElementById('menu');

hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle('active');
  menu.classList.toggle('open');

  if (menu.classList.contains('open')) {
    openSound.play();
  } else {
    closeSound.play();
  }
});
 
