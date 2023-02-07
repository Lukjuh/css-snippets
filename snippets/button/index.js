import buttonStyle from "./index.css?raw";

const button = {
  cssIndex: buttonStyle,
  htmlVariants: {
    basic: `<button class="button" type="button">Button</button>`,
    disabled: `<button class="button" type="button" disabled>Button</button>`
  }
}

export default button;