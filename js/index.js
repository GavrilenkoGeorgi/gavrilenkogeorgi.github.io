console.log(`Hi!`)

window.addEventListener(`scroll`, event => {
  let scrolled = window.pageYOffset;
  const headerImage = document.querySelector(`.header-and-logo`)
  const photoDivider = document.querySelector(`.photo-divider`)
  headerImage.style.top = (scrolled * 0.2) + `px`
  headerImage.style.opacity = 1 - (scrolled * 0.005)
  photoDivider.style.opacity = 0 + (scrolled * 0.0033)
})