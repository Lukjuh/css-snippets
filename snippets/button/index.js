import styles from "./index.css?inline";
import iconStyles from "../icon/index.css?inline";

const $default = `<button class="button">Button</button>`;
const disabled = `<button class="button" disabled>Button</button>`;
const sizes = `
<style>
.button-small {
  --_padding-x: 0.5rem;
  --_padding-y: 0.25rem;
  --_font-size: 0.875rem;
}

.button-large {
  --_padding-x: 1rem;
  --_padding-y: 0.5rem;
  --_font-size: 1.25rem;
}
</style>

<button class="button button-small" type="button">Small button</button>
<button class="button" type="button">Default button</button>
<button class="button button-large" type="button">Large button</button>
`;
const customColor = `
<style>
.button-primary {
  --_color: #ffffff;
  --_bg: #4263eb;
  --_border-color: #4263eb;

  --_hover-color: #ffffff;
  --_hover-bg: #3b5bdb;
  --_hover-border-color: #3b5bdb;

  --_active-color: #ffffff;
  --_active-bg: #364fc7;
  --_active-border-color: #364fc7;
}
</style>

<button class="button button-primary" type="button">Button</button>
`;
const customVariants = `
<style>
.button-outline-primary {
  --_color: #4263eb;
  --_bg: #ffffff;
  --_border-color: #4263eb;

  --_hover-color: #ffffff;
  --_hover-bg: #3b5bdb;
  --_hover-border-color: #3b5bdb;

  --_active-color: #ffffff;
  --_active-bg: #364fc7;
  --_active-border-color: #364fc7;
}

.button-ghost-primary {
  --_color: #4263eb;
  --_bg: #ffffff;
  --_border-color: #ffffff;

  --_hover-color: #4263eb;
  --_hover-bg: #edf2ff;
  --_hover-border-color: #edf2ff;

  --_active-color: #4263eb;
  --_active-bg: #dbe4ff;
  --_active-border-color: #dbe4ff;
}
</style>

<button class="button button-outline-primary" type="button">Button outline</button>
<button class="button button-ghost-primary" type="button">Button ghost</button>
`;
const withIcons = `
<!-- dependency: https://www.css-snippets.io/snippets/icon -->

<button class="button" type="button">
  <svg class="icon" width="1.25em" style="--_icon: url(https://api.iconify.design/lucide/shopping-cart.svg);"></svg>
  Add to cart
</button>

<button class="button" type="button">
  Follow
  <svg class="icon" width="1.25em" style="--_icon: url(https://api.iconify.design/lucide/arrow-right-circle.svg);"></svg>
</button>
`;

export default {
  html: {
    default: $default,
    disabled,
    sizes,
    'custom color': customColor,
    'custom variants': customVariants,
    'with icons': withIcons,
  },
  css: {
    default: styles,
    variants: iconStyles
  }
}