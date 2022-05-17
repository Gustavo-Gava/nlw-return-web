import { FeedbackType, feedbackTypes } from "../../../utils/widget/feedbackTypes"
import { WidgetFormHeader } from "../WidgetFormHeader"

interface FeedbackTypeStepProps {
	onFeedbackTypeChange: (key: FeedbackType) => void
}

export function FeedbackTypeStep({ onFeedbackTypeChange }: FeedbackTypeStepProps) {
	return (
		<>
			<WidgetFormHeader title="Escolha seu Feedback" />

			<div className="flex justify-between py-8 gap-2 w-full">
				{Object.entries(feedbackTypes).map(([key, value]) => (
					<button
						className="bg-surface-secondary-light dark:bg-surface-secondary-dark flex flex-1 flex-col items-center w-24 py-5 px-2 rounded-lg border-2 border-transparent hover:border-brand-hover focus:border-brand-hover focus:outline-none"
						type="button"
						onClick={() => onFeedbackTypeChange(key as FeedbackType)}
						key={key}
					>
						<img src={value.image.source} alt={value.image.alt} />
						<span>{value.title}</span>
					</button>
				))}
			</div>
		</>
	)
}
