import { ArrowLeft } from "phosphor-react"
import { CloseButton } from "../CloseButton"

interface WidgetFormHeaderProps {
	title: string
	showBackButton?: boolean
	onClickBackButton?: () => void
	icon?: {
		source: string
		alt: string
	}
}

export function WidgetFormHeader({
	title,
	icon,
	onClickBackButton,
	showBackButton = false,
}: WidgetFormHeaderProps) {
	return (
		<header className="flex items-center justify-between w-full rounded-2xl">
			{showBackButton ? (
				<button onClick={onClickBackButton}>
					<ArrowLeft className="w-4 h-4 text-zinc-400 hover:text-zinc-100" weight="bold" />
				</button>
			) : (
				<span></span>
			)}

			<div className="text-xl leading-6 flex items-center gap-2">
				{icon && <img src={icon.source} alt={icon.alt} width="24" height="24" />}
				{title}
			</div>

			<CloseButton />
		</header>
	)
}
