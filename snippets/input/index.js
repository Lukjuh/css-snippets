import styles from "./index.css?inline";

const $default = `<input class="input" type="text" placeholder="First name">`;
const disabled = `<input class="input" type="text" placeholder="First name" disabled>`;

export default {
  html: {
    default: $default,
    disabled
  },
  css: {
    default: styles,
  }
}
