import style from "./index.css?raw";
import iconStyle from "../icon/index.css?raw";

const basic = `<button class="button" type="button">Button</button>`;

const disabled = `<button class="button" type="button" disabled>Button</button>`;

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
.button-custom {
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

<button class="button button-custom" type="button">Button</button>
`;

const customVariant = `
<style>
.button-outline-custom {
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
</style>

<button class="button button-outline-custom" type="button">Button outline</button>
`;

const withIcons = `
<!-- dependency: https://www.css-snippets.io/playground.html?name=icon -->

<button class="button" type="button">
  <svg class="icon" width="1.25em" style="--_icon: url(https://api.iconify.design/lucide/shopping-cart.svg);"></svg>
  Add to cart
</button>
<button class="button" type="button">
  Follow
  <svg class="icon" width="1.25em" style="--_icon: url(https://api.iconify.design/lucide/arrow-right-circle.svg);"></svg>
</button>
`;

const snippet = {
	cssIndex: style,
	cssVariants: iconStyle,
	htmlVariants: {
		basic,
		disabled,
		sizes,
		'custom color': customColor,
		'custom variant': customVariant,
		'with icons': withIcons
	},
};

export default snippet;
