import { useState } from "react"
import { feedbackTypes } from "../../utils/widget/feedbackTypes"
import { FeedbackContentStep } from "./Steps/FeedbackContentStep"
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep"
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep"

type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
	const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
	const [feedbackSent, setFeedbackSent] = useState(false)

	function onSendAnotherFeedback() {
		setFeedbackType(null)
		setFeedbackSent(false)
	}

	return (
		<div className="flex flex-col items-center dark:bg-surface-primary-dark relative p-4 mb-4 rounded-2xl shadow-lg w-[calc(100vw-2rem)] md:w-auto">
			{feedbackSent ? (
				<FeedbackSuccessStep onSendAnotherFeedback={onSendAnotherFeedback} />
			) : (
				<>
					{!feedbackType ? (
						<FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
					) : (
						<FeedbackContentStep
							feedbackType={feedbackTypes[feedbackType]}
							onClickBackButton={() => setFeedbackType(null)}
							onFeedbackSent={() => setFeedbackSent(true)}
						/>
					)}
				</>
			)}

			<footer className="text-xs">Feito com ❤️ por Gustavo Gava</footer>
		</div>
	)
}
