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
    heroImage.style.top = scrolled * .03 + `em`
    heroImage.style.opacity = 1 - scrolled * 0.0075
    const heroHeaderLink = document.querySelector(`.header-link-animation`)
    heroHeaderLink.style.opacity = 1 - scrolled * 0.0075

    const detailsHeader = document.querySelector(`.details`)
    detailsHeader.style.opacity = scrolled * 0.004
  }

  document.addEventListener(`scroll`, animateElements)
})
