import styles from "./index.css?inline";

const $default = `
<div class="group">
	<div>item</div>
	<div>item</div>
	<div>item</div>
	<div>item</div>
	<div>item</div>
	<div>item</div>
	<div>item</div>
</div>
`;

const gap = `
<div class="group" style="--_gap: 0.25rem;">
	<div>item</div>
	<div>item</div>
	<div>item</div>
	<div>item</div>
	<div>item</div>
	<div>item</div>
	<div>item</div>
</div>
`;

export default {
  html: {
    default: $default,
		gap
  },
  css: {
    default: styles,
  }
}