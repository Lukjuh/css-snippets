import styles from "./index.css?inline";

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