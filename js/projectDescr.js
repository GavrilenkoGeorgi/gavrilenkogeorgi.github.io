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
      console.log(`Rendering ${name} project.`)
      // console.table(projects)
      let project = projects.find(obj => {
        return obj.name === name
      })
      // title and text
      shadowRoot.querySelector(`.page-title`).innerText = `${project.name}`
      shadowRoot.querySelector(`.text-descr`).innerText = `${project.descr}`

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
      for (let imgSrc of project.images) {
        let imageEl = document.createElement(`img`)
        imageEl.src = imgSrc
        imgsContainer.appendChild(imageEl)
      }
    }
  }
  customElements.define(`project-descr`, ProjectDescr)
}) ()
