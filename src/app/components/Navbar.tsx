import Line from "./line";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { TbUserExclamation } from "react-icons/tb";
import { AiOutlineShoppingCart } from "react-icons/ai";
import sofa from "@/app/assets/Sseater1.png"
import Image from "next/image";
const Navbar = () => {
    return (

        <div className="bg-[#FBEBB5] w-[1440px] h-[1000px]  flex justify-end " >


            <nav className=" w-[1440px] h-[100px] py-[38px] px-[505px] flex justify-between items-center relative " >
                <ul className="w-[430px] h-[24px] left-[505px] flex justify-between absolute ">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="w-[247px] flex justify-between absolute right-[100px] ">
                    <TbUserExclamation />
                    <IoSearch />
                    <FaRegHeart />
                    <AiOutlineShoppingCart />
            

        </div>
            </nav >
           <div className=" absolute w-[1440px]  h-[900px] ">
           <div className=" absolute w-[440px] h-48 pt-[328px] left-[202px]"><p className="  text-[64px] font-medium leading-[96px] text-left justify-between ">Rocket single seater</p> 
           < Line heading="Shop Now" line="" /></div>
<Image className=" absolute left-[587px] h-[1000px]" src={sofa} alt="bg image" />
            <div className="justify-between absolute"> 
                {/* <p className="text-2xl font-medium leading-9 text-left">Shop Now</p>
                     <div className="border-2 border-solid border-black" > </div> */}
               
                </div>    
        </div>
            
        </div>
        
    )
}
export default Navbar;
