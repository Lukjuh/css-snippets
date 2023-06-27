import styles from "./index.css?raw";

const $default = `
<input class="radio" type="radio" name="basic">
<input class="radio" type="radio" name="basic" checked>
`;
const disabled = `
<input class="radio" type="radio" name="basic" disabled>
<input class="radio" type="radio" name="basic" checked disabled>
`;

export default {
  html: {
    default: $default,
    disabled
  },
  css: {
    default: styles,
  }
}
