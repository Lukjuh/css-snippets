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
    sizes: `
<style>
.radio-small {
  --_size: 0.875em;
}

.radio-large {
  --_size: 1.5em;
}
</style>

<input class="radio radio-small" type="radio" name="sizes">
<input class="radio" type="radio" name="sizes">
<input class="radio radio-large" type="radio" name="sizes">
    `
  }
}

export default snippet;