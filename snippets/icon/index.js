import style from "./index.css?raw";

const basic = `
<svg class="icon" style="--_icon: url(https://api.iconify.design/lucide/smile.svg);"></svg>
`;

const size = `
<svg class="icon" width="1.5em" style="--_icon: url(https://api.iconify.design/lucide/smile.svg);"></svg>
`;

const color = `
<svg class="icon" width="1.5em" color="#4263eb" style="--_icon: url(https://api.iconify.design/lucide/smile.svg);"></svg>
`;

const customIcons = `
<style>
.thumb-up {
	--_icon: url(https://api.iconify.design/bi/hand-thumbs-up-fill.svg);
}
</style>

<svg class="icon" width="1.5em" style="--_icon: url(https://api.iconify.design/ic/baseline-thumb-up-off-alt.svg;"></svg>
<svg class="icon thumb-up" width="1.5em"></svg>

`;

const snippet = {
	cssIndex: style,
	htmlVariants: {
		basic,
		size,
		color,
		'custom icons': customIcons
	},
};

export default snippet;
