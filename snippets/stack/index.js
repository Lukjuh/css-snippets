import styles from "./index.css?raw";

const $default = `
<div class="stack">
	<div>item</div>
	<div>item</div>
	<div>item</div>
</div>
`;

const gap = `
<div class="stack" style="--_gap: 0.25rem;">
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