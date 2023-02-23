import style from "./index.css?raw";
import linkStyle from "../link/index.css?raw";

const basic = `
<nav aria-label="breadcrumb">
	<ol class="breadcrumb">
		<li class="breadcrumb-item"><a href="#">Home</a></li>
		<li class="breadcrumb-item"><a href="#">Library</a></li>
		<li class="breadcrumb-item active" aria-current="page">Data</li>
	</ol>
</nav>
`;

const snippet = {
	cssIndex: style,
	cssVariants: linkStyle,
	htmlVariants: {
		basic,
	},
};

export default snippet;
