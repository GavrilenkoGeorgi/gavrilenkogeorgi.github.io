
document.addEventListener(`DOMContentLoaded`, () => {
  let lazyImages = [].slice
    .call(document.querySelectorAll(`img.lazy, source.lazy`))
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
            // if it is a webp source
            if (lazyImage.dataset.src === undefined) {
              lazyImage.srcset = lazyImage.dataset.srcset
            } else { // it is image source set
              lazyImage.src = lazyImage.dataset.src
              lazyImage.srcset = lazyImage.dataset.srcset
            }

            lazyImage.classList.remove(`lazy`)
            lazyImage.classList.remove(`preview`)
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
})
