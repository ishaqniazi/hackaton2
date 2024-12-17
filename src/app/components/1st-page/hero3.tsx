import First from "./pics"

const Hero3 = () => {
    return <><div className="w-[1440px] h-[944px] flex flex-col items-center pt-[55px] gap-[65px]">
        <div className="flex flex-col items-center"><p className="font-medium text-[36px] leading-[54px] pt-[13px] ">Our Blogs</p>
            <p className="font-medium text-[16px] text-[#9F9F9F] leading-6 ">Find a bright ideal to suit your taste with our great selection</p>
        </div>  <div className="flex gap-[30px]"><First />
        </div>
        <div><p className="text-[20px] font-medium leading-[30px] pt-[75px] pb-[19px]"  >View All Post</p>
            <div className="border-2 w-[115px] border-black " > </div>
        </div>
    </div></>
}
export default Hero3