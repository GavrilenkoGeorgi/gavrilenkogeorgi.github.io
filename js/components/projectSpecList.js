// <project-spec-list></project-spec-list>

import { specs } from "../../json/projectsSpecs.js"

(async () => {
	let supportsCustomElements = `customElements` in window
	if (!supportsCustomElements) {
		console.log(`Custom elements support is ${supportsCustomElements}`)
	} else {
		const res = await fetch(`../../html/templates/projectSpecListTemplate.html`)
		const textTemplate = await res.text()
		const HTMLTemplate = new DOMParser()
			.parseFromString(textTemplate, `text/html`).querySelector(`template`)

		class ProjectSpecList extends HTMLElement {
			constructor() {
				super()
			}

			static get observedAttributes() {
				return [`project`]
			}

			disconnectedCallback() {
				console.log(`Element removed`)
				// remove event listener
			}

			connectedCallback() {
				// can add event listener
				const shadowRoot = this.attachShadow({ mode: `open`})
				const instance = HTMLTemplate.content.cloneNode(true)
				shadowRoot.appendChild(instance)
				// name of what to render from html
				const name = this.getAttribute(`project`)
				this.render(name, specs, shadowRoot)
			}

			render(name, specs, shadowRoot) {
				let spec = specs.find(obj => {
					return obj.projectName === name
				})

				// title and text
				shadowRoot.querySelector(`.project-title`).innerText = `${spec.title}`
				shadowRoot.querySelector(`.project-descr`).innerText = `${spec.descr}`

				// create techs used list
				const techList = spec.techs.split(`,`)
				const unorderedList = shadowRoot.querySelector(`.tech-specs-list`)
				for (let tech of techList) {
					const listItem = document.createElement(`li`)
					listItem.innerHTML=`<em> ${tech}<em>`
					unorderedList.appendChild(listItem)
				}

				// live and repo links
				const repoLink = document.createElement(`li`)
				repoLink.innerHTML=`Github <a href="${spec.repoLink}">repo</a>`
				unorderedList.appendChild(repoLink)

				const liveLink = document.createElement(`li`)
				liveLink.innerHTML=`Live link: <a href="${spec.liveLink}">${spec.liveLink}</a>`
				liveLink.classList.add(`project-live-link`)
				unorderedList.appendChild(liveLink)

				// project image
				const projectImage = document.createElement(`img`)
				projectImage.src=`${spec.image}`
				shadowRoot.querySelector(`.project-image-container`).appendChild(projectImage)

				// project icons
				for (let icon of spec.icons) {
					const projectIcon = document.createElement(`img`)
					projectIcon.src=`../../icons/brands/${icon}-brands.svg`
					shadowRoot.querySelector(`.project-icons-container`).appendChild(projectIcon)
				}
			}
		}
		customElements.define(`project-spec-list`, ProjectSpecList)
	}
}) ()
