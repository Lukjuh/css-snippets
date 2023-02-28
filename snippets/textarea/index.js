import styles from "./index.css?inline";

const $default = `<textarea class="textarea" rows="4" placeholder="Add your comment..."></textarea>`;
const disabled = `<textarea class="textarea" rows="4" placeholder="Add your comment..." disabled></textarea>`;

export default {
  html: {
    default: $default,
    disabled
  },
  css: {
    default: styles,
  }
}
