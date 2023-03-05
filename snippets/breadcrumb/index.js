import styles from "./index.css?inline";
import linkStyles from "../link/index.css?inline";

console.log(linkStyles)

const $default = `
<nav aria-label="breadcrumb">
	<ol class="breadcrumb">
		<li class="breadcrumb-item"><a href="#">Home</a></li>
		<li class="breadcrumb-item"><a href="#">Library</a></li>
		<li class="breadcrumb-item active" aria-current="page">Data</li>
	</ol>
</nav>
`;

export default {
  html: {
    default: $default
  },
  css: {
    default: styles,
    variants: linkStyles
  }
}