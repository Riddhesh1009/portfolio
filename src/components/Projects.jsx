import Image from "next/image"
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import Link from "next/link";


const Card = ({ desc, git, link, src ,title}) => {
    return (
        <div className="group w-full h-auto rounded-2xl overflow-hidden bg-gray-50 hover:shadow-2xl duration-500 ">
            <div className="w-full relative p-4 bg-[#00C2CB] ">
                <Image
                    width={500}
                    height={500}
                    src={src}
                    alt="Project Preview"
                    className="h-full aspect-video object-cover rounded-xl "
                />
                <div className="absolute duration-500 opacity-0 group-hover:opacity-100 top-0 left-0 w-full h-full rounded-t-xl bg-black/40 flex justify-center items-center gap-x-10">
                    {link && <Link href={link} className="p-4 text-xl bg-black/70 rounded-full"><AiFillEye /></Link>}
                    {git && <Link href={git} className="p-4 text-xl bg-black/70 rounded-full"><AiFillGithub /></Link>}
                </div>
            </div>
            <h1 className="h-auto text-[#3F444B] mx-5 mt-5 text-sm font-medium select-none leading-tight">{title}</h1>
            <h2 className="h-auto text-[#3F444B] mx-5 mb-5 mt-1 text-sm select-none leading-tight">{desc}</h2>
        </div>
    )
}

export default function Projects() {
    return (
        <div id="projects" className="h-auto bg-[#E4E8EE]">
            <div className="w-full md:w-[87%] m-auto container h-full flex md:justify-center items-center flex-col py-20">
                <p className="text-[#3F444B] px-5 text-xl md:text-2xl font-bold text-center">My Recent Work</p>
                <p className="text-[#3F444B]  mt-5 mb-20 px-5 md:px-64 text-lg text-center ">Here are a few past design projects I've worked on. Want to see more? <a href="mailto:riddheshmali109@gmail.com">Email me.</a></p>
                <div className="grid grid-cols-1 md:grid-cols-3 mx-10 md:mx-32 gap-10 md:gap-14">
                    <Card title="(Ongoing) Ecommerce: " desc="A highly customisable Ecommerce website (Product) that works like Shopify where the Business person can customize their website according to the business with the dashboard provided to it." src="/Project/Project1.png" git="https://github.com/Touchmedia-Ads/ecommerce" />
                    <Card title="List My Drug: " desc="A B2B website for Buying and Selling Pharmaceutical Medicines and Medical Equipments for manufacturers" src="/Project/Project2.png" link="https://listmydrug.com/" git="https://github.com/Touchmedia-Ads/pharmaNavigate" />
                    <Card title="Ksolare: " desc="A Website loaded with animations for Solar Grid-Tie Inverter & EV Charger Manufacturer located in Pune, Maharashtra " src="/Project/Project3.png" link="https://ksolare.com/" git="https://github.com/Touchmedia-Ads/ksolare" />
                    {/* <Card title="(Ongoing) Ecommerce:- " desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veniam" src="/Logo/demo.jpg" link="/" git="/" />
                    <Card title="(Ongoing) Ecommerce:- " desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veniam" src="/Logo/demo.jpg" link="/" git="/" />
                    <Card title="(Ongoing) Ecommerce:- " desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veniam" src="/Logo/demo.jpg" link="/" git="/" /> */}
                </div>
            </div>
        </div>
    )
}