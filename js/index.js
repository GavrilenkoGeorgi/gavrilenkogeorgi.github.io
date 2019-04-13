console.log(`Hi!`)

document.addEventListener(`DOMContentLoaded`, () => {
  let lazyImages = [].slice.call(document.querySelectorAll(`img.lazy`))
  let active = false

  const lazyLoad = () => {
    if (active === false) {
      active = true

      setTimeout(() => {
        lazyImages.forEach(lazyImage => {
          if (lazyImage.getBoundingClientRect().top
            <= window.innerHeight
            && lazyImage.getBoundingClientRect().bottom
            >= 0
            && getComputedStyle(lazyImage).display !== `none`) {
            lazyImage.src = lazyImage.dataset.src
            lazyImage.srcset = lazyImage.dataset.srcset
            lazyImage.classList.remove(`lazy`)
            lazyImages = lazyImages.filter(image => {
              return image !== lazyImage
            })

            if (lazyImages.length === 0) {
              document.removeEventListener(`scroll`, lazyLoad)
              window.removeEventListener(`resize`, lazyLoad)
              window.removeEventListener(`orientationchange`, lazyLoad)
            }
          }
        })

        active = false
      }, 200)
    }
  }

  document.addEventListener(`scroll`, lazyLoad)
  window.addEventListener(`resize`, lazyLoad)
  window.addEventListener(`orientationchange`, lazyLoad)

  // animate
  const animateElements = () => {
    let scrolled = window.pageYOffset
    const heroImage = document.querySelector(`.hero-image`)
    heroImage.style.top = scrolled * .02 + `em`
    heroImage.style.opacity = 1 - scrolled * 0.0075
    // moar stuff
    heroImage.style.filter = `grayscale(${scrolled * 0.8 + `%`})`

    const heroHeaderLink = document.querySelector(`.header-link-animation`)
    heroHeaderLink.style.opacity = 1 - scrolled * 0.0075

    const detailsHeader = document.querySelector(`.details`)
    detailsHeader.style.opacity = scrolled * 0.004
  }

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
