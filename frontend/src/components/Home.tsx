import type { ReactNode } from "react"

interface HomeProps {
	children?: ReactNode
}

export function Home({ children }: HomeProps) {
	return <h1>{children}</h1>
}