import styles from "./index.css?inline";

const $default = `
<div class="select">
  <select>
    <option value="">--Select an option--</option>
    <option value="dog">🐶 Dog</option>
    <option value="cat">🐱 Cat</option>
    <option value="hamster">🐹 Hamster</option>
    <option value="parrot">🦜 Parrot</option>
    <option value="spider">🕷️ Spider</option>
  </select>
</div>
`;

export default {
  html: {
    default: $default
  },
  css: {
    default: styles,
  }
}
