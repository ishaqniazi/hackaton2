// import PagePics from "./1stpagepics";
import imag from "@/app/assets/Trenton modular sofa_3 1.png"
import Image from "next/image"
import path from "path"
import trenton from "@/app/assets/Trenton modular sofa_3 1.png"
import granite from "@/app/assets/Granite dining table with dining chair 1.png"
import barTable from "@/app/assets/Outdoor bar table and stool 1.png"
import consoleTable from "@/app/assets/Plain console with teak mirror 1.png"


// interface PagePicsprops {
//     image:string,
//     paragraph:string,
//     price:string|number }

//     const PagePicsProps = [
//         {
//             id: 1,
//             Image: "src/app/assets/Trenton modular sofa_3 1.png",
//             paragraph: "Trenton modular sofa_3",
//             price: "Rs. 25,000.00"
//             }]
//             const PagePics = () => {
//                 return (<div>
//                     {PagePics.map((props: PagePicsProps) => {
//                         const { image, paragraph, price } = props;
//                         return
//                         <div key={ } className="h-[287px] w-[397]" >
//                             <Image
//                                 src={image}
//                                 alt="furniture"
//                                 width={287}
//                                 height={287}
//                                 className="h-[287px] w-[287] object-cover overflow-hidden" />
//                             < p className="h-6 pt-[14px] text-base font-normal leading-6 text-left" > {paragraph} </p>
//                             < div className="pt-[11px] text-2xl font-medium leading-9 text-left" > {price} </div>
//                         </div>;
//                     </div>)
//             )};



const Hero1 = () => {
    return (
        <div className="bg-[#ffffff] w-[1440px] h-[777px] top-[1663px] flex justify-center  ">
            <p className="h-[54px]  text-4xl pt-[55px]  font-medium leading-[54px] flex justify-between absolute ">       Top Picks For You  </p>
            <p className=" text-[#9F9F9F] text-base  pt-[117px] absolute font-medium leading-6  ">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>


            <div className="h-[287px] w-[397] pt-[211px] flex-none justify-between items-center relative">
                <Image src={trenton} alt="triton sofa " />
                < p className="h-6 pt-[14px] text-base font-normal leading-6 text-left pb-[11px]" > Trenton modular sofa_3 </p>
                < div className="pt-[11px] text-2xl font-medium leading-9 text-left" >Rs. 25,000.00  </div>
            </div>
            <div className="h-[287px] w-[397] pt-[211px] flex-none justify-between items-center ">
                <Image src={granite} alt="granite dining table" />
                < p className="h-6 pt-[14px] text-base font-normal leading-6 text-left pb-[11px]" > Granite dining table with <br /> dining chair </p>
                < div className="pt-[11px] text-2xl font-medium leading-9 text-left" >Rs. 25,000.00  </div>
            </div>
            <div className="h-[287px] w-[397] flex-none pt-[211px] justify-between items-center relative">
                <Image src={barTable} alt="Bar table" />
                < p className="h-6 pt-[14px] text-base font-normal leading-6 text-left pb-[11px]" > Outdoor bar table and <br /> stool</p>
                < div className="pt-[11px] text-2xl font-medium leading-9 text-left" >Rs. 25,000.00  </div>
            </div>
            <div className="h-[287px] w-[397] flex-none pt-[211px] justify-between items-center relative">
                <Image src={consoleTable} alt="Console table" />
                < p className="h-6 pt-[14px] text-base font-normal leading-6 text-left pb-[11px]" >Plain console with teak <br /> mirror</p>
                < div className="pt-[11px] text-2xl font-medium leading-9 text-left" >Rs. 25,000.00  </div>

            </div>



        </div>
    )
}

export default Hero1;