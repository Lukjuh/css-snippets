import buttonStyle from "./index.css?raw";

const snippet = {
  cssIndex: buttonStyle,
  htmlVariants: {
    basic: `<button class="button" type="button">Button</button>`,
    disabled: `<button class="button" type="button" disabled>Button</button>`,
    sizes: `
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
        `,
    "custom color": `
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
    "custom variants": `
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

.button-subtle-custom {
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

<button class="button button-outline-custom" type="button">Button outline</button>
<button class="button button-subtle-custom" type="button">Button subtle</button>
    `,
  },
};

export default snippet;
