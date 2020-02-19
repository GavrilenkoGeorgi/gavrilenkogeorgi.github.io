// import { specs } from "../../json/projectsSpecs.js"

// console.log(`Projects list`, specs)
/*
	const res = await fetch(`../../html/templates/projectList.html`)
		const textTemplate = await res.text()
		const HTMLTemplate = new DOMParser()
			.parseFromString(textTemplate, `text/html`).querySelector(`template`)
*/

(async () => {
	const res = await fetch(`../../html/templates/projectsList.html`)
	const textTemplate = await res.text()

	const HTMLTemplate = new DOMParser()
		.parseFromString(textTemplate, `text/html`).querySelector(`template`)

	class ProjectsList extends HTMLElement {
		constructor () {
			super ()
			this.attachShadow({
				mode: `open`
			})
		}
		connectedCallback() {
			// console.log(`Connected`)
			this.shadowRoot.appendChild(HTMLTemplate.content.cloneNode(true))
		}
	}
	customElements.define(`projects-list`, ProjectsList)
}) ()
