import styles from "./index.css?inline";

const $default = `<svg class="icon" width="1.25rem" style="--_icon: url(https://api.iconify.design/lucide/smile.svg);"></svg>`;
const color = `<svg class="icon" width="1.25rem" color="#4263eb" style="--_icon: url(https://api.iconify.design/lucide/smile.svg);"></svg>`;

export default {
  html: {
    default: $default,
    color
  },
  css: {
    default: styles,
  }
}