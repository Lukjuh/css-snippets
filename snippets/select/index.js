import selectStyle from "./index.css?raw";

const basic = `
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

const disabled = `
<div class="select">
  <select disabled>
    <option value="">--Select an option--</option>
    <option value="dog">🐶 Dog</option>
    <option value="cat">🐱 Cat</option>
    <option value="hamster">🐹 Hamster</option>
    <option value="parrot">🦜 Parrot</option>
    <option value="spider">🕷️ Spider</option>
  </select>
</div>
`;

const sizes = `
<style>
  .select-small {
    --_padding-x: 0.5rem;
    --_padding-y: 0.25rem;
    --_font-size: 0.875rem;
    --_icon-size: 1rem;
  }

  .select-large {
    --_padding-x: 1rem;
    --_padding-y: 0.5rem;
    --_font-size: 1.25rem;
    --_icon-size: 1.5rem;
  }
</style>

<div class="select select-small">
  <select>
    <option value="">--Select an option--</option>
    <option value="dog">🐶 Dog</option>
    <option value="cat">🐱 Cat</option>
    <option value="hamster">🐹 Hamster</option>
    <option value="parrot">🦜 Parrot</option>
    <option value="spider">🕷️ Spider</option>
  </select>
</div>

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

<div class="select select-large">
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

const snippet = {
  cssIndex: selectStyle,
  htmlVariants: {
    basic,
    disabled,
    sizes
  }
}

export default snippet;