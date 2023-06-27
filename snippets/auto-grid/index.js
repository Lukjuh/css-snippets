import styles from "./index.css?raw";

const $default = `
<div class="auto-grid">
	<div>item</div>
	<div>item</div>
	<div>item</div>
</div>
`;

export default {
  html: {
    default: $default,
  },
  css: {
    default: styles,
  }
}