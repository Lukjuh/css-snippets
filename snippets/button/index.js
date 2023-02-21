import buttonStyle from "./index.css?raw";
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
.button-outline {
  --_hover-color: #ffffff;
  --_hover-bg: #666968;
  --_hover-border-color: #666968;

  --_active-color: #ffffff;
  --_active-bg: #50514f;
  --_active-border-color: #50514f;
}

.button-ghost {
  --_border-color: #ffffff;

  --_hover-bg: #f8fafb;
  --_hover-border-color: #f8fafb;

  --_active-bg: #f2f4f6;
  --_active-border-color: #f2f4f6;
}

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

.button-ghost-custom {
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

<button class="button button-outline" type="button">Button outline</button>
<button class="button button-ghost" type="button">Button ghost</button>

<button class="button button-outline-custom" type="button">Button outline</button>
<button class="button button-ghost-custom" type="button">Button ghost</button>
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
  cssIndex: buttonStyle,
  cssVariants: iconStyle,
  htmlVariants: {
    basic,
    disabled,
    sizes,
    "custom color": customColor,
    "custom variants": customVariants,
    "with icons": withIcons,
  },
};

export default snippet;
