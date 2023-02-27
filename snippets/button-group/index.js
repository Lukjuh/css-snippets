import styles from "./index.css?inline";
import buttonStyles from "../button/index.css?inline";

const $default = `
<div class="button-group" role="group" aria-label="Basic example">
    <button class="button" type="button">Left</button>
    <button class="button" type="button">Middle</button>
    <button class="button" type="button">Right</button>
</div>
`;

export default {
  html: {
    default: $default
  },
  css: {
    default: styles,
    variants: buttonStyles
  }
} 