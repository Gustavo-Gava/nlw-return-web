import { CloseButton } from "../CloseButton"

export function WidgetFormHeader() {
	return (
		<header className="flex items-center justify-between w-full rounded-2xl">
			<span>⬅️</span>

			<div className="text-xl leading-6"></div>

			<CloseButton />
		</header>
	)
}
