import { ReactNode } from "react"
import { Footer } from "./Footer"
import Meta from "./Meta"
import { Navbar } from "./Navbar"

type LayoutProps = {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div>
            <Meta />
            <div>
                <Navbar />
                <main className="container mx-auto">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    )
}