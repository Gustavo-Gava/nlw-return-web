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
					},
				},
				text: {},
			},
		},
	},
	plugins: [],
}
