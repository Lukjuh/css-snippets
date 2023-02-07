import textareaStyle from "./index.css?raw";

const snippet = {
  cssIndex: textareaStyle,
  htmlVariants: {
    basic: `<textarea class="textarea" rows="4" placeholder="Add your comment..."></textarea>`,
    disabled: `<textarea class="textarea" rows="4" disabled>I love 🐱! </textarea>`,
  }
}

export default snippet;