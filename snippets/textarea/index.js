import textareaStyle from "./index.css?raw";

const snippet = {
  cssIndex: textareaStyle,
  htmlVariants: {
    basic: `<textarea class="textarea" rows="4" placeholder="Add your comment..."></textarea>`,
    disabled: `<textarea class="textarea" rows="4" placeholder="Add your comment..." disabled></textarea>`,
    sizes:`
<style>
.textarea-small {
  --_padding-x: 0.5rem;
  --_padding-y: 0.25rem;
  --_font-size: 0.875rem;
}

.textarea-large {
  --_padding-x: 1rem;
  --_padding-y: 0.5rem;
  --_font-size: 1.25rem;
}
</style>

<textarea class="textarea textarea-small" rows="4" placeholder="Add your comment..."></textarea>
<textarea class="textarea" rows="4" placeholder="Add your comment..."></textarea>
<textarea class="textarea textarea-large" rows="4" placeholder="Add your comment..."></textarea>
    `
  }
}

export default snippet;