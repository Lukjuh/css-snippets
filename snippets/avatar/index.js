import avatarStyle from "./index.css?raw";
import iconStyle from "../icon/index.css?raw";

const basic = `
<div class="avatar">
	<svg class="icon" width="80%" style="--_icon: url(https://api.iconify.design/heroicons/user-circle-solid.svg)"></svg>
</div>
`;

const snippet = {
  cssIndex: avatarStyle,
  cssVariants: iconStyle,
  htmlVariants: {
    basic,
  }
}

export default snippet;

