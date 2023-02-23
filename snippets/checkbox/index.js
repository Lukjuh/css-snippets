import style from "./index.css?raw";

const basic = `<input class="checkbox" type="checkbox" checked>`;

const disabled = `<input class="checkbox" type="checkbox" checked disabled>`;

const snippet = {
	cssIndex: style,
	htmlVariants: {
		basic,
		disabled
	},
};

export default snippet;
