import stackStyle from "./index.css?raw";

const basic = `
<div class="stack-y">
	<div>item</div>
	<div>item</div>
	<div>item</div>
	<div>item</div>
	<div>item</div>
</div>
`;

const snippet = {
  cssIndex: stackStyle,
  htmlVariants: {
    basic,
  }
}

export default snippet;

