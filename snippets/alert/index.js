import styles from "./index.css?inline";

const $default = `
<div class="alert" role="alert">A simple alert!</div>
`;

export default {
  html: {
    default: $default
  },
  css: {
    default: styles,
  }
}