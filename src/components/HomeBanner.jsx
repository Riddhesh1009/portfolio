import Image from "next/image"

export default function () {
    return (
        <div id="home" className="h-screen bg-[#E4E8EE] pt-[150px] md:pt-[75px] ">
            <div className="w-full md:w-[87%] m-auto container h-full flex md:justify-center items-center flex-col">
            <p className="text-[#03989E] px-5 text-5xl font-bold ">Frontend Web Developer</p>
            <p className="text-[#03989E] px-5 text-2xl mt-1 mb-10">I code beautifully simple things, and I love what I do.</p>
            <div className="w-[300px] h-[300px] rounded-full overflow-hidden bg-[#03989E]/70 border-[#3F444B] border-4">
                <Image
                    width={750}
                    height={750}
                    src="/photo1.png"
                    className="h-[350px] aspect-square object-cover"
                />
            </div>
            </div>
        </div>
    )
}