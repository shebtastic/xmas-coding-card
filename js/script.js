document.addEventListener("click", () => {
  const element = document.querySelector(".card");
  element.classList.toggle("flipped");
});

createSnowfall({ count: 1, speed: 1, wind: 0, angularMomentum: 0.7 });
