console.log(`Hi!`)

window.addEventListener(`scroll`, () => {
  let scrolled = window.pageYOffset
  const heroImage = document.querySelector(`.hero-image`)
  const dividerImage = document.querySelector(`.divider-image`)
  const heroHeader = document.querySelector(`.hero-header`)
  const detailsHeader = document.querySelector(`.details-header`)
  // hero image
  heroImage.style.top = scrolled * .04 + `em`
  heroImage.style.opacity = 1 - scrolled * 0.0075
  // header text
  heroHeader.style.top = scrolled * .02 + `em`
  heroHeader.style.opacity = 1 - scrolled * 0.0075
  // details image
  dividerImage.style.opacity = scrolled * 0.005
  // details text
  detailsHeader.style.opacity = scrolled * 0.005
})
