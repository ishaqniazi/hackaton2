import Image from "next/image";
import Line from "./line";
import sofa from "@/app/assets/1st-Page/Sseater1.png"

const NavPage =()=>{
return(
<div className=" absolute w-[1440px]  h-[900px] ">
           <div className=" absolute w-[440px] h-48 pt-[328px] left-[202px]"><p className="  text-[64px] font-medium leading-[96px] text-left justify-between ">Rocket single seater</p> 
           < Line heading="Shop Now" line="" /></div>
<Image className=" absolute left-[587px] h-[1000px]" src={sofa} alt="bg image" />
            <div className="justify-between absolute"> 
                {/* <p className="text-2xl font-medium leading-9 text-left">Shop Now</p>
                     <div className="border-2 border-solid border-black" > </div> */}
               
                </div>    
        </div>
            
                    
        
    )
}
export default NavPage;