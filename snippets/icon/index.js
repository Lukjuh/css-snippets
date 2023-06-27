import styles from "./index.css?raw";

const $default = `<svg class="icon" width="1.25rem" style="--_icon: url(https://api.iconify.design/lucide/smile.svg);"></svg>`;

const color = `<svg class="icon" width="1.25rem" color="#4263eb" style="--_icon: url(https://api.iconify.design/lucide/smile.svg);"></svg>`;

const customIcons = `
<style>
.icon-smile-1 {
  --_icon: url(https://api.iconify.design/bi/emoji-smile-fill.svg);
}

.icon-smile-2 {
  --_icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="24" height="24" viewBox="0 0 24 24"%3E%3Cpath fill="currentColor" d="M12 2a9 9 0 0 1 9 9v7.5a3.5 3.5 0 0 1-6.39 1.976a2.999 2.999 0 0 1-5.223 0a3.5 3.5 0 0 1-6.382-1.783L3 18.499V11a9 9 0 0 1 9-9zm0 2a7 7 0 0 0-6.996 6.76L5 11v7.446l.002.138a1.5 1.5 0 0 0 2.645.88l.088-.116a2 2 0 0 1 3.393.142a.999.999 0 0 0 1.74.003a2 2 0 0 1 3.296-.278l.097.13a1.5 1.5 0 0 0 2.733-.701L19 18.5V11a7 7 0 0 0-7-7zm4 9a4 4 0 0 1-7.995.2L8 13h2a2 2 0 1 0 4 0h2zm-4-6a2 2 0 1 1 0 4a2 2 0 0 1 0-4z"%2F%3E%3C%2Fsvg%3E');
}
</style>

<svg class="icon" width="1.5rem" color="#ae3ec9" style="--_icon: url(https://api.iconify.design/ri/bear-smile-line.svg);"></svg>
<svg class="icon icon-smile-1" width="1.5rem" color="#7048e8"></svg>
<svg class="icon icon-smile-2" width="1.5rem" color="#4263eb"></svg>
`;

export default {
  html: {
    default: $default,
    color,
    'custom icons': customIcons
  },
  css: {
    default: styles,
  }
}