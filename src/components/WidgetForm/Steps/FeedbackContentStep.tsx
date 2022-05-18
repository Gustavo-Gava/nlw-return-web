import { Camera } from "phosphor-react"
import { FormEvent, useState } from "react"
import { Button } from "../../Form/Button"
import { ScreenshotButton } from "../../ScreenshotButton"
import { WidgetFormHeader } from "../WidgetFormHeader"

interface FeedbackContentStepProps {
	feedbackType: {
		title: string
		image: {
			source: string
			alt: string
		}
	}
	onClickBackButton: () => void
	onFeedbackSent: () => void
}

export function FeedbackContentStep({
	feedbackType,
	onClickBackButton,
	onFeedbackSent,
}: FeedbackContentStepProps) {
	const [screenshot, setScreenshot] = useState<string | null>(null)
	const [comment, setComment] = useState("")

	function handleSubmitFeedback(event: FormEvent) {
		event.preventDefault()
		// TODO

		onFeedbackSent()
	}

	return (
		<>
			<WidgetFormHeader
				title={feedbackType.title}
				icon={feedbackType.image}
				showBackButton
				onClickBackButton={onClickBackButton}
			/>

			<form className="w-full mb-4" onSubmit={handleSubmitFeedback}>
				<textarea
					className="min-w-[304px] min-h-[112px] w-full bg-transparent border-[1px] border-stroke-light dark:border-stroke-dark focus:border-brand-500 focus:dark:border-brand-500 focus:ring-500 focus:ring-1 rounded-md outline-0 mb-2 mt-4 py-2 px-3 resize-none scrollbar-thumb-stroke-dark scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded"
					placeholder="Conte com detalhes o que está acontecendo"
					id="feedback"
					onChange={(event) => setComment(event.target.value)}
					value={comment}
				/>

				<footer className="w-full flex flex-row gap-2">
					<ScreenshotButton onScreenshotTook={setScreenshot} screenshot={screenshot} />

					<Button title="Enviar Feedback" type="submit" disabled={comment.trim() === ""} />
				</footer>
			</form>
		</>
	)
}
