// <project-descr></project-descr>

import { projects } from "../json/projectData.js"

(async () => {
  const res = await fetch(`./templates/projectDescrTemplate.html`)
  const textTemplate = await res.text()
  const HTMLTemplate = new DOMParser()
    .parseFromString(textTemplate, `text/html`).querySelector(`template`)

  class ProjectDescr extends HTMLElement {
    constructor() {
      super()
    }

    static get observedAttributes() {
      // add attributes here
      return [`name`]
    }
    /*
    attributeChangedCallback(name, oldVal, newVal) {
      console.table({ name, oldVal, newVal })
    }
    */
    disconnectedCallback() {
      console.log(`Element removed`)
      // remove event listener
    }

    connectedCallback() {
      // can add event listener
      console.log(`Element added`)
      const shadowRoot = this.attachShadow({ mode: `open`})
      const instance = HTMLTemplate.content.cloneNode(true)
      shadowRoot.appendChild(instance)
      // name of what to render from html
      const name = this.getAttribute(`name`)
      this.render(name, projects, shadowRoot)
    }

    render(name, projects, shadowRoot) {
      // console.table(projects)
      let project = projects.find(obj => {
        return obj.name === name
      })

      // title and text
      shadowRoot.querySelector(`.page-title`).innerText = `${project.name}`

      // create external links list
      let unorderedList = shadowRoot.querySelector(`.external-links`)
      for (let extLink of project.externalLinks) {
        let listItem = document.createElement(`li`)
        listItem.innerHTML=`<a href="${extLink.link}">
          ${extLink.humanReadable}</a>`
        unorderedList.appendChild(listItem)
      }

      // create images node
      let imgsContainer = shadowRoot.querySelector(`.project-images`)
      for (let image of project.images) {
        let pictureEl = document.createElement(`picture`)
        let imgEl = document.createElement(`img`)
        let webpSrcset = ``
        let source = document.createElement(`source`)
        for (let src of image.webpSrc) {
          webpSrcset += src + ` ` // plus space
        }
        source.srcset = webpSrcset
        source.type = `image/webp`

        let imgSrcset = ``
        for (let index in image.imgSrc) {
          if (index == 0) {
            // image for default src of img element
            imgEl.src = image.imgSrc[index]
          } else {
            imgSrcset += image.imgSrc[index] + ` ` // space
          }
        }
        imgEl.srcset = imgSrcset
        imgEl.alt = image.alt
        pictureEl.appendChild(source)
        pictureEl.appendChild(imgEl)
        // append assembled picture element
        imgsContainer.appendChild(pictureEl)
      }
    }
  }
  customElements.define(`project-descr`, ProjectDescr)
}) ()
