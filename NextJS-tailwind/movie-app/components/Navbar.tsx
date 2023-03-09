import Link from "next/link"

export const Navbar = () => {
    return (
        <nav className="bg-gray-700">
            <div className="font-bold text-neutral-100 p-4 mx-auto container tracking-widest">
                <Link href={"/"}>
                    Movie app
                </Link>
            </div>
        </nav>
    )
}