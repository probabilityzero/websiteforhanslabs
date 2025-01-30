const seconds = document.querySelector(".seconds .number"),
  minutes = document.querySelector(".minutes .number"),
  hours = document.querySelector(".hours .number"),
  days = document.querySelector(".days .number");

// difference = deadline - current date
const diff = new Date("2024-02-28").getTime() - new Date().getTime();

// when the deadline is already passed, the values are set to 0
if (diff <= 0) {
  seconds.textContent = '00';
  minutes.textContent = '00';
  hours.textContent = '00';
  days.textContent = '00';
} else {
  // setting values of the countdown based on the difference
  let secValue = Math.floor(diff / 1000) % 60,
    minValue = Math.floor(diff / 1000 / 60) % 60,
    hourValue = Math.floor(diff / 1000 / 60 / 60) % 24,
    dayValue = Math.floor(diff / 1000 / 60 / 60 / 24);

  const updateCountdown = () => {
    seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
    minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
    hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
    days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;

    if (secValue === 0) {
      secValue = 60;
      if (minValue === 0) {
        minValue = 60;
        if (hourValue === 0) {
          hourValue = 24;

          dayValue--;
        }
        hourValue--;
      }
      minValue--;
    }
    secValue--;
  }
  // updating the countdown now to not feel a delay
  updateCountdown()

  // updatting the countdown every second
  const timeFunction = setInterval(() => {
    updateCountdown()
    // stoping the countdown update
    if (secValue === 0 && minValue === 0 && hourValue === 0 && dayValue === 0) {
      surpriseFall();
      clearInterval(timeFunction);
    }
  }, 1000); //1000ms = 1s
}

// changing the telegram icon from black to white whenever the user moves his cursor over the button
const contactUsBTN = document.querySelector("#input-box button");
const tgicon = contactUsBTN.querySelector("img");

// hovering
contactUsBTN.addEventListener("mouseover", () => {
  tgicon.src = "tgicon_white.png";
  contactUsBTN.classList.add("hovered")
})
// holding finger
contactUsBTN.addEventListener("touchstart", () => {
  tgicon.src = "tgicon_white.png";
  contactUsBTN.classList.add("hovered")
})

// lifted finger
contactUsBTN.addEventListener("touchend", () => {
  tgicon.src = "tgicon_black.png";
  contactUsBTN.classList.remove("hovered")
})
// left button
contactUsBTN.addEventListener("mouseleave", () => {
  tgicon.src = "tgicon_black.png";
  contactUsBTN.classList.remove("hovered")
})

document.addEventListener('DOMContentLoaded', function () {
  function createFlower(startX) {
    const flowerImages = ["flower1.png", "flower3.png", "flower5.png"];
    const randomImage = flowerImages[Math.floor(Math.random() * flowerImages.length)];

    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.style.left = startX + "px";
    flower.style.backgroundImage = `url('${randomImage}')`;

    // Set a random horizontal translation value
    const translationRange = 200
    const randomTranslateX = Math.random() * 2 * translationRange - translationRange; // Adjust the range as needed
    flower.style.setProperty('--translateX', randomTranslateX);

    // Set a random animation duration
    const randomDuration = Math.random() * 2 + 1; // Adjust the range as needed
    flower.style.animationDuration = `${randomDuration}s`;

    // Remove the flower after the animation completes
    flower.addEventListener('animationend', function () {
      flower.remove();
    });

    document.body.appendChild(flower);
  }

  document.addEventListener('click', function (event) {
    for (let f=0; f<=Math.random()*10; f++){
      createFlower(event.clientX);
    }
    // play bird song here, since audio can not be played unless the user interacts
    document.querySelector("audio").play();
  });
  setInterval(()=>{
    createFlower(Math.random()*window.innerWidth);
  }, 500)
});

function surpriseFall(){
  const flowerWidth = 20;
  for (let f=0; f<window.innerWidth/flowerWidth; f++){
    createFlower(f*flowerWidth);
  }
}
          // script.js

document.addEventListener("DOMContentLoaded", function() {
  document.body.innerHTML += `
  <audio autoplay loop>
    <source src="birdsong.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>`;
});
