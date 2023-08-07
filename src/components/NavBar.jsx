import Image from "next/image"
import Link from "next/link"

 

export default function NavBar() {
    return (
        <div className="bg-[#3F444B] h-[75px] fixed w-full z-40">
            <div className="w-full md:w-[87%] m-auto container h-full p-3 flex justify-between items-center">
                <Image
                    width={500}
                    height={500}
                    src="/Logo/logo2.png"
                    className="w-auto h-full object-contain sm:hover:scale-125 duration-500 ease-out"
                />
                <div className="invisible md:visible flex justify-center items-center text-black">
                    <Link offset={-75} href="/#home" className="px-4 text-[#00C2CB] hover:scale-110 hover:mb-2 duration-500 font-medium ">Home</Link>
                    <Link offset={-75} href="/#about" className="px-4 text-[#00C2CB] hover:scale-110 hover:mb-2 duration-500 font-medium ">About</Link>
                    <Link offset={-75} href="/#projects" className="px-4 text-[#00C2CB] hover:scale-110 hover:mb-2 duration-500 font-medium ">Projects</Link>
                    <Link offset={-75} href="/#skills" className="px-4 text-[#00C2CB] hover:scale-110 hover:mb-2 duration-500 font-medium ">Skills</Link>
                    <Link offset={-75} href="/#contact" className="px-4 text-[#00C2CB] hover:scale-110 hover:mb-2 duration-500 font-medium ">Contact</Link>
                </div>
            </div>
        </div>
    )
}