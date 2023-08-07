import Image from "next/image"
import { AiFillGithub,AiFillEye } from "react-icons/ai";
import Link from "next/link";


const Card = ({desc,git,link,src}) => {
    return (
        <div className="w-full h-auto rounded-2xl overflow-hidden bg-gray-50 hover:shadow-2xl duration-500 p-5">
            <div className="w-full h-60 relative">
                <Image
                    width={500}
                    height={500}
                    src={src}
                    alt="Project Preview"
                    className="h-full object-cover rounded-xl"
                />
                <div className="absolute duration-500 opacity-0 hover:opacity-100 top-0 left-0 w-full h-full rounded-xl bg-black/40 flex justify-center items-center gap-x-10">
                    <Link href={link} className="p-4 text-xl bg-black/70 rounded-full"><AiFillEye/></Link>
                    <Link href={git} className="p-4 text-xl bg-black/70 rounded-full"><AiFillGithub /></Link>
                </div>
            </div>
            <div className="h-24 text-[#3F444B] mt-5 text-center select-none">{desc}</div>

        </div>
    )
}

export default function Projects() {
    return (
        <div className="h-auto bg-[#E4E8EE]">
            <div className="w-full md:w-[87%] m-auto container h-full flex md:justify-center items-center flex-col py-20">
                <p className="text-[#3F444B] px-5 text-xl md:text-2xl font-bold text-center">My Recent Work</p>
                <p className="text-[#3F444B]  mt-5 mb-20 px-5 md:px-64 text-lg text-center ">Here are a few past design projects I've worked on. Want to see more? <a href="mailto:riddheshmali109@gmail.com">Email me.</a></p>
                <div className="grid grid-cols-1 md:grid-cols-3 mx-10 md:mx-32 gap-10 md:gap-14">
                    <Card desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veniam" src="/Logo/demo.jpg" link="/" git="/" />
                    <Card desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veniam" src="/Logo/demo.jpg" link="/" git="/" />
                    <Card desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veniam" src="/Logo/demo.jpg" link="/" git="/" />
                    <Card desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veniam" src="/Logo/demo.jpg" link="/" git="/" />
                    <Card desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veniam" src="/Logo/demo.jpg" link="/" git="/" />
                    <Card desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veniam" src="/Logo/demo.jpg" link="/" git="/" />
                </div>
            </div>
        </div>
    )
}