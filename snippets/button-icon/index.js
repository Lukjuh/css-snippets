import styles from "./index.css?raw";
import buttonStyles from "../button/index.css?raw";
import iconStyles from "../icon/index.css?raw";

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
