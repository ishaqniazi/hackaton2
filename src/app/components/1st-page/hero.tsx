import table from "@/app/assets/1st-page/table.png"
import seater from "@/app/assets/1st-page/three-seater.png"
import Image from "next/image";

const Hero = () => {
    return (
        <div className=" bg-[#FAF4F4] flex justify-center items-center w-[1440px] h-[672px]" >
            <div className=" relative w-[605px] h-[562px] flex flex-col justify-end pl-[106px] pb-[53px]">
                <Image src={table} alt="table" className=" w-[1092px] absolute right-0 top-[10px]" />

                <p className="text-4xl font-medium leading-[54px] text-left ">Side table</p>
                <p className="text-2xl font-medium pt-[23px] pb-[13px] text-left" >View More</p>
                <div className="border-2 w-[121px] border-black" > </div>

            </div>
            <div>
                <div className=" relative w-[605px] h-[562px] flex flex-col justify-end pl-[106px] pb-[53px]">
                    <Image src={seater} alt="three-seater" className=" w-[1092px] absolute right-0 top-[10px]" />
                    <p className="text-4xl font-medium leading-[54px] text-left ">Side table</p>
                    <p className="text-2xl font-medium pt-[23px] pb-[13px] text-left" >View More</p>
                    <div className="border-2 w-[121px] border-black" > </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;