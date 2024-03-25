"use strict";

const mainButton = document.querySelector(".neon-button");
const container = document.querySelector(".container");
const letters = "QWERTYUIOPASDFGHJKLZXCVBNM";

mainButton.addEventListener("click", function () {
  this.style.cssText = `padding: 40dvh 40dvw;`;
  this.classList.remove("neon-button-effect");
  this.style.pointerEvents = "none";
  const span = this.querySelector("span");
  span.style.fontSize = "8rem";
  const text = container.querySelectorAll(".text");
  const countdown = [3, 2, 1];
  countdown.forEach((count, i) => {
    setTimeout(() => {
      span.textContent = count;
    }, i * 1000);
  });
  setTimeout(() => {
    span.textContent = "";
    container.classList.remove("hidden");

    function animateText(index) {
      if (index >= text.length) {
        return;
      }

      let txt = text[index];
      let iterations = 0;
      const interval = setInterval(() => {
        txt.textContent = txt.textContent
          .split("")
          .map((_, i) => {
            if (i < iterations) {
              return txt.dataset.value[i];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
        iterations++;
        if (iterations > txt.dataset.value.length) {
          clearInterval(interval);
          animateText(index + 1);
        }
      }, 120);
    }
    animateText(0);
  }, 3000);
});
