import { themes } from "mdx-deck";

export default {
	...themes.dark,
	fonts: {
		body: "Roboto, sans-serif",
		monospace: '"Roboto Mono", monospace'
	},
	colors: {
		background: "#011627",
		code: "#7fdbca",
		link: "#CCC",
		primary: "#7fdbca",
		text: "white"
	},
	css: {
		textAlign: "left",
		fontSize: "16px",
		"@media screen and (min-width:64em)": {
			fontSize: "32px"
		},
		"& h3": {
			maxWidth: "60ch"
		},
		"& p": {
			maxWidth: "35ch"
		},
		"& blockquote": {
			fontSize: "16px"
		},
		"& blockquote p": {
			maxWidth: "100%"
		},
		"& .prism-code": {
			fontSize: "40px",
			padding: "62.5px 0px !important"
		},
		"& h1 + div": {
			flexGrow: "0 !important"
		},
		"& h1 + div ~ p": {
			maxWidth: "55ch",
			width: "55ch"
		}
	}
};
