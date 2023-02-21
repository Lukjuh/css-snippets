import iconStyle from "./index.css?raw";

const basic = `<svg class="icon"></svg>`;

const size = `<svg class="icon" width="1.5em"></svg>`;

const color = `<svg class="icon" width="1.5em" color="#4263eb"></svg>`;

const customIcons = `
<style>
.thumbs-down-line {
  --_icon: url(https://api.iconify.design/mingcute/thumb-down-line.svg);
}
</style>

<svg class="icon thumbs-down-line" width="1.5em"></svg>
<svg class="icon" width="1.5em" style="--_icon: url(https://api.iconify.design/ri/thumb-up-fill.svg);"></svg>
`;

const snippet = {
  cssIndex: iconStyle,
  htmlVariants: {
    basic,
    size,
    color,
    "custom icons": customIcons
  }
}

export default snippet;

