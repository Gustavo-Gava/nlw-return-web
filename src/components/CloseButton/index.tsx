import { Popover } from "@headlessui/react"
import { X } from "phosphor-react"

interface CloseButtonProps {
	absolute?: boolean
}

export function CloseButton({ absolute = false }: CloseButtonProps) {
	return (
		<Popover.Button
			className={`${absolute && "absolute top-4 right-4"} text-zinc-400 hover:text-zinc-100`}
			title="Fechar formulário de Feedback"
		>
			<X className="w-4 h-4" weight="bold" />
		</Popover.Button>
	)
}
