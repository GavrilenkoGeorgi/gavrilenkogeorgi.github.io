console.log(`Hi!`)

document.addEventListener(`DOMContentLoaded`, () => {
  // animate
  let animating = false
  const animateElements = () => {
    let scrolled = window.pageYOffset
    const heroHeaderLink = document.querySelector(`.header-link-animated`)
    const heroImage = document.querySelector(`.hero-image`)
    // header image and link opacity
    let headerLinkAndImageOpacity = 1 - scrolled * 0.0075
    if (headerLinkAndImageOpacity <= 1) {
      heroImage.style.opacity = headerLinkAndImageOpacity
      heroHeaderLink.style.opacity = headerLinkAndImageOpacity
    }
    // grayscale and transform
    let heroImageGrayscale = scrolled * 1
    if (heroImageGrayscale <= 100) {
      heroImage.style.filter = `grayscale(${heroImageGrayscale + `%`})`
    }
    let heroImageTransform = scrolled * .02
    if (heroImageTransform <= 10 ) {
      heroImage.style.transform = `translateY(${heroImageTransform}em)`
    }
    // details header opacity and grayscale
    const detailsHeader = document.querySelector(`.details`)
    const detailsPic = document.querySelector(`.detals-pic`)
    let currentOpacity = detailsHeader.style.opacity
    let grayScalePercent = 100 - scrolled * .165
    let calculatedImageOpacity = (scrolled * 0.004).toFixed(2)
    // set opacity
    if (calculatedImageOpacity <= 1
        || !currentOpacity) {
      if (calculatedImageOpacity < .05) {
        calculatedImageOpacity = 0
      }
      detailsHeader.style.opacity = calculatedImageOpacity
    } else {
      // default values
      detailsHeader.style.opacity = 1
      detailsPic.style.filter = `grayscale(0%)`
    }
    // set grayscale
    if (grayScalePercent > 0) {
      detailsPic.style.filter = `grayscale(${grayScalePercent + `%`})`
    }

    // animate it
    if (animating) {
      requestAnimationFrame(() => animateElements())
    }
    animating = false
  }

  // now with rAF
  document.addEventListener(`scroll`, () => {
    animating = !animating
    requestAnimationFrame(() => animateElements())
  })

  /*
  // debounce
  const debounce = (func, delay) => {
    let inDebounce
    return function() {
      const context = this
      const args = arguments
      clearTimeout(inDebounce)
      inDebounce = setTimeout(() => func.apply(context, args), delay)
    }
  }
  // on scroll
  document.addEventListener(`scroll`, debounce(() => {
    animateElements()
  }, 16))
  */

  // throttle
  /*
  const throttle = (fn, wait) => {
    var time = Date.now()
    return () => {
      if (time + wait - Date.now() < 0) {
        fn()
        time = Date.now()
      }
    }
  }
  // throttle on scroll
  document.addEventListener(`scroll`, throttle(animateElements, 16))
  */

  // svg icon color changer
  const getRandomColor = () => {
    let letters = `0123456789ABCDEF`
    let color = `#`
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  // change svg icon color
  let headerIcon = document.getElementById(`headerIcon`)
  // so that hovering over the link
  // on desktop changes color too
  let headerWithIcon = document.querySelector(`.hero-link`)

  const setIconFillColor = (svgIcon) => {
    let icon = svgIcon.contentDocument
    let color = getRandomColor()
    // suppose our image contains a <path>
    let path = icon.querySelector(`path`)
    path.setAttribute(`fill`, `${color}`)
  }
  // on element load we set random icon color
  headerIcon.addEventListener(`load`, () => {
    setIconFillColor(headerIcon)
  })
  // then on mouse over the whole link on desktop screen
  headerWithIcon.addEventListener(`mouseover`, () => {
    setIconFillColor(headerIcon)
  })
  // and on touch on mobile
  document.addEventListener(`touchstart`, () => {
    setIconFillColor(headerIcon)
  })
})
