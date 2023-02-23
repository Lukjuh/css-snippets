import style from "./index.css?raw";

const basic = `<textarea class="textarea" rows="4" placeholder="Add your comment..."></textarea>`;

const disabled = `<textarea class="textarea" rows="4" placeholder="Add your comment..." disabled></textarea>`;

const snippet = {
	cssIndex: style,
	htmlVariants: {
		basic,
		disabled
	},
};

export default snippet;
