import style from "./index.css?raw";

const basic = `
<input class="radio" type="radio" name="basic">
<input class="radio" type="radio" name="basic" checked>
`;

const disabled = `
<input class="radio" type="radio" name="basic" disabled>
<input class="radio" type="radio" name="basic" checked disabled>
`;

const snippet = {
	cssIndex: style,
	htmlVariants: {
		basic,
		disabled
	},
};

export default snippet;
