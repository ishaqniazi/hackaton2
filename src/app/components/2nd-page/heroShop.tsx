import Icon1 from "@/app/assets/2nd-page/system-uicons_filtering.png"
import Icon2 from "@/app/assets/2nd-page/Vector.png"
import Icon3 from "@/app/assets/2nd-page/Vector (1).png"
import Image from "next/image"

const HeroShop = () => {
    return (
        <div className="w-[1440px] h-[100px] flex flex-row  pt-[463px] bg-[#FAF4F4]">
            <div className="w-[85px] h-[30px] flex flex-row justify-between">
                <Image src={Icon1} alt="icon1" className=" w-[25px] h-[25px]" />
                <p className="font-normal text-[20px] leading-[30px] w-[48px] h-[30px]">Filter</p>
            </div>
            <Image src={Icon2} alt="icon2" className="w-[28px] h-[28px] flex flex-row" />
            <Image src={Icon3} alt="icon2" className="w-[24px] h-[24px]" />
            <div className="w-[237px] h-[37px]  ">
                <div className="w-[37px] justify-between ">
                    <div className="border-2 border-[#9F9F9F] rotate-90" ></div>
                    <div className="w-[203px] h-[24px]  font-normal text-[16px] leading-6 "> Showing 1–16 of 32 results</div>
                </div>
                <div className="w-[126px] h-[55px] flex flex-row justify-between ">
                    <div className="w-[55px]  h-[30px] font-normal text-[20px] leading-[30px]">Show</div>
                    <div className="w-[55px] h-[55px] bg-white flex flex-row justify-between "> 16</div>
                </div>
                <div className="w-[288px] h-[55px] flex flex-row justify-between ">
                    <div className="w-[83px]  h-[30px] font-normal text-[20px] leading-[30px]">Short by</div>
                    <div className="w-[188px] h-[55px] bg-white flex flex-row justify-between ">Default</div>
                </div>
            </div>
        </div>

    )
}

export default HeroShop;