import { ReactNode } from "react"
import { Navbar } from "./Navbar"

type LayoutProps = {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div>
            <Navbar />
            <main className="container mx-auto">
                {children}
            </main>
        </div>
    )
}