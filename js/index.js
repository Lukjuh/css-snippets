import loader from "@monaco-editor/loader";
import iframeStyles from "../styles/iframe.css?inline";

const params = new URLSearchParams(window.location.search);
const name = params.get('name');
const snippet = (await import(`../snippets/${name}/index.js`)).default;

class Playground extends HTMLElement {
  updateModel(e) {
    if (e.target.value === "html") {
      this.editor.setModel(this.htmlModel);
    }
    if (e.target.value === "css") {
      this.editor.setModel(this.cssModel);
    }
  }

  updateVariant(e) {
		this.htmlModel.setValue(snippet.htmlVariants[e.target.value]);
		this.updatePreview();
  }

  updatePreview() {
    this.querySelector(".js-iframe").srcdoc = `
      <style>${iframeStyles} ${snippet.cssVariants ? snippet.cssVariants : ''} ${this.cssModel.getValue()}</style>
      <div class="container">${this.htmlModel.getValue()}</div>
    `;
  }

  connectedCallback() {
    this.querySelector('.js-title').textContent = name;
    this.querySelectorAll(".js-tab").forEach((el) => el.addEventListener("click", this.updateModel.bind(this)));
    this.querySelector(".js-variant")?.addEventListener("change", this.updateVariant.bind(this));

    Object.keys(snippet.htmlVariants).map(variant => {
      this.querySelector('.js-variant').innerHTML += `<option value="${variant}">${variant}</option>`
    });

    if (Object.keys(snippet.htmlVariants).length > 1) {
      this.querySelector('.js-variant').hidden = false;
    }
    
    loader.init().then((monaco) => {
      this.htmlModel = monaco.editor.createModel(
        snippet.htmlVariants.basic,
        "html",
        monaco.Uri.parse("file:///html")
      );

      this.cssModel = monaco.editor.createModel(
        snippet.cssIndex,
        "css",
        monaco.Uri.parse("file:///css")
      );

      this.editor = monaco.editor.create(this.querySelector('.js-editor'), {
        model: this.cssModel,
        automaticLayout: true,
        minimap: {
          enabled: false,
        },
      });

      this.editor.onDidChangeModelContent(() => this.updatePreview());
      window.addEventListener("resize", () => this.editor.layout({}));
			this.updatePreview();
    });
  }
}

class Switch extends HTMLElement {
  onClick(e) {
    this.closest("css-playground").setAttribute("mode", e.target.value);
  }
  connectedCallback() {
    this.addEventListener("click", this.onClick);
  }
}

customElements.define('css-playground', Playground);
customElements.define("css-switch", Switch);