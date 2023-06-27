import styles from "./index.css?raw";

const $default = `<span class="badge">99</span>`;

const variants = `
<style>
.badge-primary {
  --_color: #4263eb;
	--_bg: #dbe4ff;
}

.badge-primary-solid {
  --_color: #ffffff;
	--_bg: #4263eb;
}

.badge-primary-outline {
  --_color: #4263eb;
	--_bg: #ffffff;

  outline: 1px solid #4263eb;
}
</style>

<span class="badge badge-primary">99</span>
<span class="badge badge-primary-solid">99</span>
<span class="badge badge-primary-outline">99</span>
`;

const relative = `
<style>
.badge-relative {
	--_padding-x: 0.5em;
	--_padding-y: 0.25em;
	--_font-size: 0.75em;
}
</style>

<h1>H1 heading <span class="badge badge-relative">99</span></h1>
`;

export default {
  html: {
    default: $default,
    variants,
    relative
  },
  css: {
    default: styles,
  }
}