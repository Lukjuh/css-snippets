import styles from "./index.css?inline";

const $default = `
<input class="radio" type="radio" name="basic">
<input class="radio" type="radio" name="basic" checked>
`;

export default {
  html: {
    default: $default
  },
  css: {
    default: styles,
  }
}
