console.log(`Hi!`)

window.addEventListener(`scroll`, event => {
  let scrolled = window.pageYOffset;
  const headerImage = document.querySelector(`.header-and-logo`)
  headerImage.style.top = (scrolled * 0.4) + `px`
})