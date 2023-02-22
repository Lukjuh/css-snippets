import style from "./index.css?raw";
import buttonStyle from "../button/index.css?raw";
import iconStyle from "../icon/index.css?raw";

const basic = `
<button class="button button-icon" type="button">
	<svg class="icon" width="1.25em" style="--_icon: url(https://api.iconify.design/lucide/x.svg);"></svg>
</button>
`;

const snippet = {
  cssIndex: style,
  cssVariants: buttonStyle + iconStyle,
  htmlVariants: {
    basic,
  },
};

export default snippet;
