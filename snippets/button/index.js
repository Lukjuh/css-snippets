import buttonStyle from "./index.css?raw";

const snippet = {
  cssIndex: buttonStyle,
  htmlVariants: {
    basic: `<button class="button" type="button">Button</button>`,
    disabled: `<button class="button" type="button" disabled>Button</button>`,
    custom: `
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
    `,
    size:`
<style>
.button-small {
	--_padding-x: 0.65rem;
	--_font-size: 0.875rem;
}
</style>

<button class="button button-small" type="button">Button</button>
    `
  }
}

export default snippet;