import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Custom404() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/');
        }, 5000);

        return () => clearTimeout(timer);
    }, [])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-6xl font-bold">404 - Page Not Found</h1>
        </div>
    )
}