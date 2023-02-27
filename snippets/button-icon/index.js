import styles from "./index.css?inline";
import buttonStyles from "../button/index.css?inline";
import iconStyles from "../icon/index.css?inline";

const $default = `
<button class="button button-icon" type="button">
    <svg class="icon" width="1.25em" style="--_icon: url(https://api.iconify.design/lucide/x.svg);"></svg>
</button>
`;

export default {
  html: {
    default: $default
  },
  css: {
    default: styles,
    variants: buttonStyles + iconStyles
  }
} 
