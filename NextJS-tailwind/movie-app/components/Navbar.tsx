import Link from "next/link"



export const Navbar = () => {
    return (
        <nav className="bg-gray-700">
            <div className="font-bold text-neutral-100 p-4 mx-auto container tracking-widest font-neue">
                <Link href={"/"}>
                    <span className="text-base md:text-2xl">Movie app</span>
                </Link>
            </div>
        </nav>
    )
}