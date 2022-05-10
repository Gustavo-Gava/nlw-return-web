import { feedbackTypes } from "../../utils/widget/feedbackTypes"
import { WidgetFormHeader } from "./WidgetFormHeader"

export function WidgetForm() {
	return (
		<div className="flex flex-col items-center dark:bg-surface-primary-dark relative p-4 mb-4 rounded-2xl shadow-lg w-[calc(100vw-2rem)] md:w-auto">
			<WidgetFormHeader />

			<main className="flex justify-between py-8 gap-2 w-full">
				{Object.entries(feedbackTypes).map(([key, value]) => (
					<span key={key}>{value.title}</span>
				))}
			</main>

			<footer className="text-xs">Feito com ❤️ por Gustavo Gava</footer>
		</div>
	)
}
