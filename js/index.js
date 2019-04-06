console.log(`Hi!`)

window.addEventListener(`scroll`, () => {
  let scrolled = window.pageYOffset
  const heroImage = document.querySelector(`.hero-image`)
  const dividerImage = document.querySelector(`.divider-image`)
  const heroHeaderLink = document.querySelector(`.header-link-container`)
  const detailsHeader = document.querySelector(`.details-header`)
  // hero image
  heroImage.style.top = scrolled * .04 + `em`
  heroImage.style.opacity = 1 - scrolled * 0.0075
  // header text
  heroHeaderLink.style.bottom = 5 - scrolled * .02 + `em`
  heroHeaderLink.style.opacity = 1 - scrolled * 0.0075
  // details image
  dividerImage.style.opacity = scrolled * 0.005
  // details text
  detailsHeader.style.opacity = scrolled * 0.005
})
