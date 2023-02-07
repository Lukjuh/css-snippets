import radioStyle from "./index.css?raw";

const snippet = {
  cssIndex: radioStyle,
  htmlVariants: {
    basic: `
<input class="radio" type="radio" name="basic">
<input class="radio" type="radio" name="basic" checked>
`,
    disabled: `
<input class="radio" type="radio" name="disabled" checked disabled>
<input class="radio" type="radio" name="disabled" checked disabled>
`,
  }
}

export default snippet;