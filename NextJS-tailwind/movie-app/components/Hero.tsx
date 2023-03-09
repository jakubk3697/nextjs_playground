import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => {
    return (
        <div className="text-center bg-white pb-10">
            <div className="w-60 mx-auto">
                <Image
                    src={"/home_cinema.png"}
                    alt="logo"
                    width={200}
                    height={200}
                    className="mx-auto"
                />
            </div>
            <h1 className="text-2xl text-gray-700 uppercase font-bold">WElcome to MovieApp</h1>
            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur.</p>
            <Link href={'/contact'}>
                <button className="bg-gray-700 text-white py-3 px-6 rounded text-sm mt-4">Contact us</button>
            </Link>
        </div>
    )
}