import Link from "next/link";
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";


export default function Socials() {
    return (
        <div className="z-50 static md:fixed left-3 bottom-3 flex justify-evenly flex-row md:flex-col gap-2 bg-[#3F444B]/30 md:bg-transparent text-gray-50 text-2xl py-4 md:py-0 md:text-lg">
            <Link href="https://www.linkedin.com/in/riddhesh-mali-795271204/" className="bg-[#3F444B]/90 p-5 md:p-3 rounded-full"><BsLinkedin /></Link>
            <Link href="https://github.com/Riddhesh1009" className="bg-[#3F444B]/90 p-5 md:p-3 rounded-full"><BsGithub /></Link>
            <Link href="https://twitter.com/RiddheshMali" className="bg-[#3F444B]/90 p-5 md:p-3 rounded-full"><BsTwitter /></Link>
            <Link href="https://www.instagram.com/_riddzzz_hm/" className="bg-[#3F444B]/90 p-5 md:p-3 rounded-full"><BsInstagram /></Link>
        </div>
    )
}