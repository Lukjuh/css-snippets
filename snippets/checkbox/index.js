import styles from "./index.css?inline";

const $default = `<input class="checkbox" type="checkbox" checked>`;
const disabled = `<input class="checkbox" type="checkbox" checked disabled>`;

export default {
  html: {
    default: $default,
    disabled
  },
  css: {
    default: styles,
  }
}