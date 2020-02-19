// <project-descr></project-descr>

import { projects } from "../json/projectData.js"
import progressiveImages from "./progressiveImagesComp.js"

(async () => {
	let supportsCustomElements = `customElements` in window
	if (!supportsCustomElements) {
		console.log(`Custom elements support is ${supportsCustomElements}`)
	} else {
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
				// console.log(`Element added`)
				const shadowRoot = this.attachShadow({ mode: `open`})
				const instance = HTMLTemplate.content.cloneNode(true)
				shadowRoot.appendChild(instance)
				// name of what to render from html
				const name = this.getAttribute(`name`)
				this.render(name, projects, shadowRoot)
				let lazyImages = [].slice
					.call(shadowRoot.querySelectorAll(`img.lazy, source.lazy`))
				progressiveImages(lazyImages)
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
					pictureEl.className += `progressive`
					let imgEl = document.createElement(`img`)
					imgEl.className += `preview lazy`

					// webp source set
					let webpSrcset = ``
					let source = document.createElement(`source`)
					source.className += `preview lazy`
					for (let src of image.webpSrc) {
						webpSrcset += src + ` ` // plus space
					}
					source.setAttribute(`data-srcset`, webpSrcset)
					source.type = `image/webp`
					// preview image for source
					source.srcset = image.previewSrc

					// image element source set
					let imgSrcset = ``
					for (let index in image.imgSrc) {
						if (index == 0) {
							// image for default src of img element
							imgEl.setAttribute(`data-src`, image.imgSrc[index])
						} else {
							imgSrcset += image.imgSrc[index] + ` ` // space
						}
					}
					// image preview src
					imgEl.src = image.previewSrc
					imgEl.setAttribute(`data-srcset`, imgSrcset)
					imgEl.alt = image.alt
					// append source with webp images
					// to picture element
					pictureEl.appendChild(source)
					// append image element with
					// non webp images to picture
					// element
					pictureEl.appendChild(imgEl)
					// append assembled picture element
					// to its parent
					imgsContainer.appendChild(pictureEl)
				}
			}
		}
		customElements.define(`project-descr`, ProjectDescr)
	}
}) ()
