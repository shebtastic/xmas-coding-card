document.addEventListener('click', () => {
  const element = document.querySelector(".card")
  console.log(element)
  element.classList.toggle('flipped')
})
