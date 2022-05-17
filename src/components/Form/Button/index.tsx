import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	title: string
}

export function Button({ title, ...rest }: ButtonProps) {
	return (
		<button
			className="bg-brand-500 py-2 px-8 text-sm rounded-[4px] flex-1 hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
			{...rest}
		>
			{title}
		</button>
	)
}
