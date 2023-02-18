import radioStyle from "./index.css?raw";

const basic = `
<input class="radio" type="radio" name="basic">
<input class="radio" type="radio" name="basic" checked>
`;

const disabled = `
<input class="radio" type="radio" name="disabled" checked disabled>
<input class="radio" type="radio" name="disabled" checked disabled>
`;

const sizes = `
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
`;

const snippet = {
  cssIndex: radioStyle,
  htmlVariants: {
    basic,
    disabled,
    sizes
  }
}

export default snippet;