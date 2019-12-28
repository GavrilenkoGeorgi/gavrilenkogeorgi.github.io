// <project-spec-list></project-spec-list>

import { specs } from "../../json/projectsSpecs.js"
// import progressiveImages from "./progressiveImagesComp.js"

(async () => {
	let supportsCustomElements = `customElements` in window
	console.log(`Custom list element`)
	console.log(`specs are`, specs)
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
				console.log(`List element added`)
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
				liveLink.innerHTML=`<a href="${spec.liveLink}">${spec.liveLink}</a>`
				unorderedList.appendChild(liveLink)
			}
		}
		customElements.define(`project-spec-list`, ProjectSpecList)
	}
}) ()
