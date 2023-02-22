import style from "./index.css?raw";

const basic = `
<div class="group">
	<div>item</div>
	<div>item</div>
	<div>item</div>
	<div>item</div>
	<div>item</div>
	<div>item</div>
	<div>item</div>
</div>
`;

const snippet = {
	cssIndex: style,
	htmlVariants: {
		basic,
	},
};

export default snippet;
