import styles from "./index.css?inline";

const $default = `<button class="button">Button</button>`;
const disabled = `<button class="button" disabled>Button</button>`;

export default {
  html: {
    default: $default,
    disabled
  },
  css: {
    default: styles,
  }
}