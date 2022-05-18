import { CloseButton } from "../../CloseButton"

import checkIcon from "../../../assets/svg/check.svg"

interface FeedbackSuccessStepProps {
	onSendAnotherFeedback: () => void
}

export function FeedbackSuccessStep({ onSendAnotherFeedback }: FeedbackSuccessStepProps) {
	return (
		<div className="w-[304px]">
			<header>
				<CloseButton absolute />
			</header>

			<div className="flex flex-col justify-center items-center mt-4">
				<img src={checkIcon} alt="Ícone de correto" />
				<h2 className="text-xl mt-2">Agradecemos o Feedback</h2>

				<button
					className="bg-surface-secondary-dark rounded-[4px] py-2 px-4 my-5 hover:bg-surface-secondary-hover-dark transition-colors"
					onClick={onSendAnotherFeedback}
				>
					Quero enviar outro
				</button>
			</div>
		</div>
	)
}
