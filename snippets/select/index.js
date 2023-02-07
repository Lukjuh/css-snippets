import selectStyle from "./index.css?raw";

const snippet = {
  cssIndex: selectStyle,
  htmlVariants: {
    basic: `
<div class="select">
  <select>
    <option value="">--Please choose an option--</option>
    <option value="dog">🐶 Dog</option>
    <option value="cat">🐱 Cat</option>
    <option value="hamster">🐹 Hamster</option>
    <option value="parrot">🦜 Parrot</option>
    <option value="spider">🕷️ Spider</option>
  </select>
</div>
    `,
    disabled: `
<div class="select">
  <select disabled>
    <option value="">--Please choose an option--</option>
    <option value="dog">🐶 Dog</option>
    <option value="cat">🐱 Cat</option>
    <option value="hamster">🐹 Hamster</option>
    <option value="parrot">🦜 Parrot</option>
    <option value="spider">🕷️ Spider</option>
  </select>
</div>
    `,
  }
}

export default snippet;