console.log(`Hi!`)

window.addEventListener(`scroll`, () => {
  let scrolled = window.pageYOffset
  const heroImage = document.querySelector(`.hero-image`)
  heroImage.style.top = scrolled * .03 + `em`
  heroImage.style.opacity = 1 - scrolled * 0.0075
  const heroHeaderLink = document.querySelector(`.header-link-animation`)
  heroHeaderLink.style.opacity = 1 - scrolled * 0.0075

  const detailsHeader = document.querySelector(`.details`)
  detailsHeader.style.opacity = scrolled * 0.004
  /*
  const heroHeaderLink = document.querySelector(`.header-link-animation`)
  let currentBottom = heroHeaderLink.style.bottom
  console.log(`Pre current bottom is ${currentBottom}`)
  let value = currentBottom.substr(0, currentBottom.length-2)

  console.log(`Current bottom is ${value}`)
  let result = Math.abs(value - scrolled * .04).toFixed(2)
  console.log(`Result is ${result}`)
  /* console.log(`Current bottom is ${currentBottom}`) */
  /* let valueToSet = parseFloat(result).toFixed(2) */
  /* heroHeaderLink.style.bottom = value + result + `em` */
  /*
  heroHeaderLink.style.top = scrolled * .04 + `em`
  console.log(`Trying to set ${result + `em`}`)

  heroHeaderLink.style.opacity = 1 - scrolled * 0.0075
  */
  /*
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
  */
})
