import style from "./index.css?raw";
import buttonStyle from "../button/index.css?raw";

const basic = `
<div class="button-group" role="group" aria-label="Basic example">
  <button class="button" type="button">Left</button>
  <button class="button" type="button">Middle</button>
  <button class="button" type="button">Right</button>
</div>
`;

const snippet = {
	cssIndex: style,
	cssVariants: buttonStyle,
	htmlVariants: {
		basic,
	},
};

export default snippet;
