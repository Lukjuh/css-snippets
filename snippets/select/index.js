import style from "./index.css?raw";

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

const snippet = {
	cssIndex: style,
	htmlVariants: {
		basic,
    disabled
	},
};

export default snippet;
