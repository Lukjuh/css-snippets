import buttonStyle from "./index.css?raw";

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

const customVariants = `
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

<button class="button button-outline-custom" type="button">Button outline</button>
<button class="button button-ghost-custom" type="button">Button ghost</button>
`;

const withIcons = `
<button class="button" type="button">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
  Add to cart
</button>

<button class="button" type="button">
  Follow
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
</button>
`;

const snippet = {
  cssIndex: buttonStyle,
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
