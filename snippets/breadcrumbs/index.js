import breadcrumbStyle from "./index.css?raw";

const basic = `
<nav aria-label="breadcrumb">
	<ol class="breadcrumb">
		<li class="breadcrumb-item"><a class="link" href="#">Home</a></li>
		<li class="breadcrumb-item"><a class="link" href="#">Library</a></li>
		<li class="breadcrumb-item active" aria-current="page">Data</li>
	</ol>
</nav>
`;

const snippet = {
  cssIndex: breadcrumbStyle,
  htmlVariants: {
    basic,
  }
}

export default snippet;

