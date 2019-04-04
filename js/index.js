console.log(`Hi!`)

window.addEventListener(`scroll`, event => {
  let scrolled = window.pageYOffset;
  // const headerImage = document.querySelector(`.header-and-logo`)
  // const photoDivider = document.querySelector(`.photo-divider`)
  const imageText = document.querySelector(`.image-title-text`)
  imageText.style.bottom = 2 - (scrolled * .015) + `em`

  const heroImage = document.querySelector(`.hero-image`)
  heroImage.style.top = - (scrolled * .01) + `em`
  // parallaxImage.style.opacity = 1 - (scrolled * 0.005)

  const parallaxImage = document.querySelector(`.hero-parallax-image`)
  parallaxImage.style.top = + (scrolled * .04) + `em`
  parallaxImage.style.opacity = 1 - (scrolled * 0.005)

  //
  // Details parallax
  //
  const detailsImage = document.querySelector(`.details-image`)
  // detailsImage.style.top = - (scrolled * .01) + `em`
  detailsImage.style.opacity = 0 + (scrolled * 0.002)

  const detailsParallaxImage = document.querySelector(`.details-parallax-image`)
  // detailsParallaxImage.style.top = + (scrolled * .01) + `em`
  detailsParallaxImage.style.height = 10 + (scrolled * .005) + `em`

  // heroImage.style.opacity = 1 - (scrolled * 0.0033)
  // console.log(`Parallax style top ${parallax.style.height}`)
  // console.dir(parallax)
  // parallax.style.opacity = 0 + (scrolled * 0.0033)
  // headerImage.style.top = (scrolled * 0.2) + `px`
  // headerImage.style.opacity = 1 - (scrolled * 0.0033)
  // photoDivider.style.opacity = 0 + (scrolled * 0.0033)
})