import styles from "./index.css?raw";
import iconStyles from "../icon/index.css?raw";

const $default = `
<!-- dependency: https://www.css-snippets.io/snippets/icon -->

<div class="avatar">
	<svg class="icon" width="80%" style="--_icon: url(https://api.iconify.design/heroicons/user-circle-solid.svg);"></svg>
</div>
`;

const image = `
<div class="avatar">
  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80">
</div>
`;

export default {
  html: {
    default: $default,
    image
  },
  css: {
    default: styles,
    variants: iconStyles
  }
}