import Image from "next/image"
import trenton from "@/app/assets/1st-Page/Trenton modular sofa_3 1.png"
import granite from "@/app/assets/1st-Page/Granite dining table with dining chair 1.png"
import barTable from "@/app/assets/1st-Page/Outdoor bar table and stool 1.png"
import consoleTable from "@/app/assets/1st-Page/Plain console with teak mirror 1.png"

const Hero1 = () => {
    return (
        <div className="bg-[#ffffff] w-[1440px] h-[777px] top-[1663px] flex justify-center  ">
            <p className="h-[54px]  text-4xl pt-[55px]  font-medium leading-[54px] flex justify-between absolute ">       Top Picks For You  </p>
            <p className=" text-[#9F9F9F] text-base  pt-[117px] absolute font-medium leading-6  ">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>


            <div className="h-[287px] w-[397] pt-[211px] pl-[100px] flex-none justify-between items-center relative ">
                <Image src={trenton} alt="triton sofa " className="h-[287px] w-[297]" />
                < p className="h-6 text-base W-[194px] font-normal leading-6 text-left" > Trenton modular sofa_3 </p>
                < div className="pt-[11px] h-9 w-[158px] text-2xl font-medium leading-9 text-left " >Rs. 25,000.00  </div>
            </div>
            <div className="h-[287px] w-[397] pt-[211px] pl-[30px] flex-none justify-between items-center ">
                <Image src={granite} alt="granite dining  table" className="h-[185px] w-[255px]" />
                < p className="h-12 w-[212px]  text-base pt-[100px] font-normal leading-6 text-left" > Granite dining table with <br /> dining chair </p>
                < div className="pt-[74px] text-2xl h-9 w-[158px] font-medium leading-9 text-left" >Rs. 25,000.00  </div>
            </div>
            <div className="h-[287px] w-[397] flex-none top-[160px] pl-[31px] justify-between items-center relative">
                <Image src={barTable} alt="Bar table" className=" h-[287px] w-[287px]" />
                < p className="h-12 w-[212px] text-base font-normal pt-[54px] leading-6 text-left" > Outdoor bar table and <br /> stool</p>
                < div className="pt-[74px] text-2xl font-medium h-9 w-[158px] leading-9 text-left" >Rs. 25,000.00  </div>
            </div>
            <div className="h-[287px] w-[397] flex-none pt-[220px] pl-[31px] justify-between items-center relative">
                <Image src={consoleTable} alt="Console table" className="h-[174px] w-[240px]" />
                < p className="h-12 w-[199px] text-base font-normal pt-[100px] leading-6 text-left" >Plain console with teak <br /> mirror</p>
                < div className="pt-[74px] text-2xl font-medium leading-9 h-9 w-[158px] text-left" >Rs. 25,000.00  </div>

            </div>
            <div className="absolute pt-[677px] "><p className="text-2xl font-medium pt-[23px] pb-[13px] text-left" >View More</p>
                <div className="border-2 w-[121px] border-black" > </div>
            </div>

        </div>
    )
}

export default Hero1;