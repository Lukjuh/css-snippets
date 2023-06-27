import styles from "./index.css?inline";

const $default = `
<div class="card">
	Card
</div>
`;

const body = `
<div class="card">
	<div class="card-body">Card body</div>
</div>
`;

export default {
  html: {
    default: $default,
    body: body
  },
  css: {
    default: styles,
  }
}