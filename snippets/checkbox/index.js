import checkboxStyle from "./index.css?raw";

const snippet = {
  cssIndex: checkboxStyle,
  htmlVariants: {
    basic: `<input class="checkbox" type="checkbox" checked>`,
    disabled: `<input class="checkbox" type="checkbox" checked disabled>`,
    sizes: `
<style>
.checkbox-small {
  --_size: 0.875em;
}

.checkbox-large {
  --_size: 1.5em;
}
</style>

<input class="checkbox checkbox-small" type="checkbox" checked>
<input class="checkbox" type="checkbox" checked>
<input class="checkbox checkbox-large" type="checkbox" checked>
    `,
  }
}

export default snippet;

