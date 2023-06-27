import styles from "./index.css?raw";
import iconStyles from "../icon/index.css?raw";

const $default = `
<div class="alert" role="alert">A simple alert!</div>
`;

const withIcon = `
<!-- dependency: https://www.css-snippets.io/snippets/icon -->

<div class="alert" role="alert">
  <svg class="icon" width="1.25rem" style="--_icon: url(https://api.iconify.design/lucide/info.svg);"></svg>
  A simple alert!
</div>
`;

const variants = `
<style>
.alert-primary-solid {
  --_color: #ffffff;
	--_bg: #4263eb;
}

.alert-primary-outline {
  --_color: #4263eb;
	--_bg: #ffffff;

  outline: 1px solid #4263eb;
}
</style>

<div class="alert" role="alert">
  <svg class="icon" width="1.25rem" style="--_icon: url(https://api.iconify.design/lucide/info.svg);"></svg>
  A simple alert!
</div>
<div class="alert alert-primary-solid" role="alert">
  <svg class="icon" width="1.25rem" style="--_icon: url(https://api.iconify.design/lucide/info.svg);"></svg>
  A simple alert!
</div>
<div class="alert alert-primary-outline" role="alert">
  <svg class="icon" width="1.25rem" style="--_icon: url(https://api.iconify.design/lucide/info.svg);"></svg>
  A simple alert!
</div>
`;

export default {
  html: {
    default: $default,
    'with icon': withIcon,
    variants
  },
  css: {
    default: styles,
    variants: iconStyles
  }
}