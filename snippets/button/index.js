import buttonStyle from "./index.css?raw";

const snippet = {
  cssIndex: buttonStyle,
  htmlVariants: {
    basic: `<button class="button" type="button">Button</button>`,
    disabled: `<button class="button" type="button" disabled>Button</button>`
  }
}

export default snippet;