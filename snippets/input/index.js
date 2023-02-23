import style from "./index.css?raw";

const basic = `<input class="input" type="text" placeholder="First name">`;

const disabled = `<input class="input" type="text" placeholder="First name" disabled>`;

const sizes = `
<style>
.input-small {
  --_padding-x: 0.5rem;
  --_padding-y: 0.25rem;
  --_font-size: 0.875rem;
}
.input-large {
  --_padding-x: 1rem;
  --_padding-y: 0.5rem;
  --_font-size: 1.25rem;
}
</style>

<input class="input input-small" type="text" placeholder="First name">
<input class="input" type="text" placeholder="First name">
<input class="input input-large" type="text" placeholder="First name">
`;

const snippet = {
	cssIndex: style,
	htmlVariants: {
		basic,
		disabled,
		sizes	
	},
};

export default snippet;
