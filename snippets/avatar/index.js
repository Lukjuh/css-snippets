import styles from "./index.css?inline";
import iconStyles from "../icon/index.css?inline";

const $default = `
<div class="avatar">
	<svg class="icon" width="80%" style="--_icon: url(https://api.iconify.design/heroicons/user-circle-solid.svg);"></svg>
</div>
`;

export default {
  html: {
    default: $default
  },
  css: {
    default: styles,
    variants: iconStyles
  }
}