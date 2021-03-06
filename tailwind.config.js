module.exports = {
	content: ["./src/**/*.tsx"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				brand: {
					500: "#8257E6",
					hover: "#996DFF",
					"text-on-brand-color": "#FFFFFF",
				},
				background: {
					dark: "#09090A",
					light: "#FEFEFE",
				},
				surface: {
					primary: {
						dark: "#18181B",
						light: "#FFFFFF",
					},
					secondary: {
						dark: "#27272A",
						light: "#F4F4F5",
						hover: {
							dark: "#3F3F46",
							light: "#E4E4E7",
						},
					},
				},
				text: {
					primary: {
						dark: "#F4F4F5",
					},
				},
				stroke: {
					dark: "#52525B",
					light: "#D4D4D8",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
}
