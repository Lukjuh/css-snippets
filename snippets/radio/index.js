import style from "./index.css?raw";

const basic = `
<input class="radio" type="radio" name="basic">
<input class="radio" type="radio" name="basic" checked>
`;

const snippet = {
	cssIndex: style,
	htmlVariants: {
		basic,
	},
};

export default snippet;
