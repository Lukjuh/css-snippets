import styles from "./index.css?raw";

const $default = `
<div class="accordion">
	<div class="accordion-item">
		<h3>
			<button class="accordion-button" type="button" aria-expanded="false" aria-controls="accordion-1">Accordion title 1</button>
		</h3>
		<div id="accordion-1" class="accordion-panel">Accordion panel 2</div>
	</div>
	<div class="accordion-item">
		<h3>
			<button class="accordion-button" type="button" aria-expanded="false" aria-controls="accordion-2">Accordion title 2</button>
		</h3>
		<div id="accordion-2" class="accordion-panel">Accordion panel 2</div>
	</div>
	<div class="accordion-item">
		<h3>
			<button class="accordion-button" type="button" aria-expanded="false" aria-controls="accordion-3">Accordion title 3</button>
		</h3>
		<div id="accordion-3" class="accordion-panel">Accordion panel 3</div>
	</div>
</div>
`;
const open = `
<div class="accordion">
	<div class="accordion-item">
		<h3>
			<button class="accordion-button" type="button" aria-expanded="true" aria-controls="accordion-1">Accordion title 1</button>
		</h3>
		<div id="accordion-1" class="accordion-panel is-open">Accordion panel 2</div>
	</div>
	<div class="accordion-item">
		<h3>
			<button class="accordion-button" type="button" aria-expanded="false" aria-controls="accordion-2">Accordion title 2</button>
		</h3>
		<div id="accordion-2" class="accordion-panel">Accordion panel 2</div>
	</div>
	<div class="accordion-item">
		<h3>
			<button class="accordion-button" type="button" aria-expanded="false" aria-controls="accordion-3">Accordion title 3</button>
		</h3>
		<div id="accordion-3" class="accordion-panel">Accordion panel 3</div>
	</div>
</div>
`;

export default {
  html: {
    default: $default,
		open
  },
  css: {
    default: styles,
  }
}