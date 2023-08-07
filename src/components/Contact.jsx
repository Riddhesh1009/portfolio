import { MdEmail } from "react-icons/md";
import { FcIphone } from "react-icons/fc";


export default function Contact(){
    return(
        <div className="h-auto bg-gray-50">
            <div className="w-full md:w-[87%] m-auto container h-full flex md:justify-center items-center flex-col py-20">
                <p className="text-[#3F444B] px-5 text-2xl md:text-4xl font-bold text-center mb-10 md:mb-20">Let's Connect!!</p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-10 md:gap-32">
                    <div className="py-4 px-6 bg-sky-100 flex items-center rounded-xl gap-x-3 w-[280px]">
                        <MdEmail className="text-sky-500 text-3xl"/>
                        <p className="text-sky-500 text-sm font-medium">riddheshmali109@gmail.com</p>
                    </div>
                    <div className="py-4 px-6 bg-orange-100 flex items-center rounded-xl gap-x-3 w-[280px]">
                        <FcIphone className="text-3xl"/>
                        <p className="text-orange-500 text-sm font-medium">+91-8552978723</p>
                    </div>
                </div>
            </div>
        </div>
    )
}