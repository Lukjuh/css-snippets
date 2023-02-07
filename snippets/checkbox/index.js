import checkboxStyle from "./index.css?raw";

const snippet = {
  cssIndex: checkboxStyle,
  htmlVariants: {
    basic: `<input class="checkbox" type="checkbox" checked>`,
    disabled: `<input class="checkbox" type="checkbox" checked disabled>`,
  }
}

export default snippet;