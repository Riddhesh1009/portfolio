import Image from "next/image"

const Icon = ({src,title}) => {
    return (
        <div className="flex flex-col items-center justify-center w-[75px] h-[75px]">
            <div className="p-4 rounded-full bg-[#E4E8EE]">
                <Image
                    width={500}
                    height={500}
                    src={src}
                    alt="Project Preview"
                    className="aspect-square object-contain rounded-xl"
                />
            </div>
            <p className="text-sm font-medium text-[#3F444B] text-center mt-1">{title}</p>
        </div>
    )
}

export default function Skills() {
    return (
        <div id="skills" className="h-auto bg-gray-50">
            <div className="w-full md:w-[87%] m-auto container h-full flex md:justify-center items-center flex-col py-20">
                <p className="text-[#3F444B] px-5 text-2xl md:text-4xl font-bold text-center mb-20">Skills</p>
                <div className="flex justify-center items-center flex-wrap gap-4 gap-y-10 md:mx-10 md:gap-14">
                    <Icon title="Canva" src="/Skill/logo2.svg"/>
                    <Icon title="Figma" src="/Skill/logo9.svg"/>
                    <Icon title="Html" src="/Skill/logo5.svg"/>
                    <Icon title="CSS" src="/Skill/logo21.png"/>
                    <Icon title="Javascript" src="/Skill/logo10.svg"/>
                    <Icon title="Tailwind" src="/Skill/logo20.png"/>
                    <Icon title="Bootstrap" src="/Skill/logo1.svg"/>
                    <Icon title="Typescript" src="/Skill/logo3.svg"/>
                    <Icon title="React" src="/Skill/logo4.png"/>
                    <Icon title="Next" src="/Skill/logo17.svg"/>
                    <Icon title="Git" src="/Skill/logo19.png"/>
                    <Icon title="Github" src="/Skill/logo12.svg"/>
                    <Icon title="npm" src="/Skill/logo11.svg"/>
                    <Icon title="Yarn" src="/Skill/logo16.svg"/>
                    <Icon title="Node" src="/Skill/logo13.png"/>
                    <Icon title="MongoDB" src="/Skill/logo7.svg"/>
                    <Icon title="C" src="/Skill/logo8.svg"/>
                    <Icon title="C++" src="/Skill/logo18.png"/>
                    <Icon title="Python" src="/Skill/logo6.svg"/>
                    <Icon title="Jupyter" src="/Skill/logo14.svg"/>
                    <Icon title="VScode" src="/Skill/logo15.svg"/>
                </div>
            </div>
        </div>
    )
}