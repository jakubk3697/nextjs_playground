import Image from 'next/image'

export default function Contact() {
    return (
        <div className="text-center bg-white pb-10">
            <h1 className="text-2xl text-gray-700 uppercase font-bold">Contact us</h1>
            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur.</p>
            <Image
                src={"/contact_us.png"}
                alt="contact logo"
                width={400}
                height={400}
                className="mx-auto"
            />
        </div>
    )
}