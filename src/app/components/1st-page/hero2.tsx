import Image from "next/image"


const Hero2 = () => {
    return (
        <div className="bg-[#FFF9E5] flex justify-between w-[1440px] h-[777px]">
            <div className="w-[983px] h-[799px]">
                <Image src="/1st page pics/doublesofa.png" alt="picture" width={983} height={799} />
            </div>
            <div className="w-[331px] h-[205px] pt-[217px] flex flex-col items-center">
                <div className="w-[331px] h-[108px] flex flex-col justify-center items-center"><div className="w-[149px] h-9 font-medium text-2xl  leading-9">New Arrivals</div>
                    <div className="w-[331px] h-[72px] font-bold text-5xl leading-[72px] mb-[33px] ">Asgaard sofa</div>
                </div> <button className="w-[255px] border-2 border-black py-[20px] h-16 ont-normal text-[20px] leading-[30px] flex justify-center relative items-center mt-4">Order Now</button>
            </div>
        </div>

    )
};
export default Hero2;