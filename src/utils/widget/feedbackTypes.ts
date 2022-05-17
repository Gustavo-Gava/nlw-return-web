import bugImageUrl from "../../assets/svg/bug.svg"
import ideaImageUrl from "../../assets/svg/idea.svg"
import thoughtImageUrl from "../../assets/svg/thought.svg"

export const feedbackTypes = {
	BUG: {
		title: "Problema",
		image: {
			source: bugImageUrl,
			alt: "Imagem de um inseto",
		},
	},
	IDEA: {
		title: "Ideia",
		image: {
			source: ideaImageUrl,
			alt: "Imagem de uma lâmpada",
		},
	},
	OTHER: {
		title: "Outro",
		image: {
			source: thoughtImageUrl,
			alt: "Imagem de um balão de pensamento",
		},
	},
}

export type FeedbackType = keyof typeof feedbackTypes
