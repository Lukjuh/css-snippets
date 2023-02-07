import inputStyle from "./index.css?raw";

const snippet = {
  cssIndex: inputStyle,
  htmlVariants: {
    basic: `<input class="input" type="text" placeholder="First name">`,
    disabled: `<input class="input" type="text" value="Max" disabled>`,
  }
}

export default snippet;