import html2canvas from "html2canvas"
import { Camera, Trash } from "phosphor-react"
import { useState } from "react"
import { Loading } from "../Loading"

interface ScreenshotButtonProps {
	onScreenshotTook: (photo: string | null) => void
	screenshot: string | null
}

export function ScreenshotButton({ onScreenshotTook, screenshot }: ScreenshotButtonProps) {
	const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

	async function handleTakeScreenshot() {
		try {
			setIsTakingScreenshot(true)

			const canvas = await html2canvas(document.querySelector("html")!)
			const base64image = canvas.toDataURL("image/png")

			onScreenshotTook(base64image)
		} catch (err) {
			alert("Não foi possível tirar a screenshot")
			console.error(err)
		} finally {
			setIsTakingScreenshot(false)
		}
	}

	if (screenshot) {
		return (
			<button
				type="button"
				className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end"
				onClick={() => onScreenshotTook(null)}
				style={{
					backgroundImage: `url(${screenshot})`,
					backgroundPosition: "right bottom",
					backgroundSize: "180",
				}}
			>
				<Trash weight="fill" />
			</button>
		)
	}

	return (
		<button
			className="bg-surface-secondary-dark border-transparent p-2 rounded-lg hover:bg-surface-secondary-hover-dark transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
			onClick={handleTakeScreenshot}
			type="button"
		>
			{isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6 text-text-primary-dark" />}
		</button>
	)
}
