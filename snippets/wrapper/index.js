import styles from "./index.css?raw";

const $default = `<div class="wrapper">Wrapper</div>`;

const width = `<div class="wrapper" style="--_max-width: 140ch;">Wrapper</div>`;

export default {
  html: {
    default: $default,
    width
  },
  css: {
    default: styles,
  }
}