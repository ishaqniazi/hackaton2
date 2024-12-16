import Icon1 from "@/app/assets/1st-Page/Vector.png"
import Icon2 from "@/app/assets/1st-Page/Vector1.png"
import Icon3 from "@/app/assets/1st-Page/Vector2.png"
import Icon4 from "@/app/assets/1st-Page/Vector3.png"
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (

        <nav className=" w-[1440px] h-[100px]  py-[38px] px-[505px] flex justify-between items-center relative " >
            <div className="w-[430px] h-[24px] left-[505px] flex justify-between absolute ">
                <Link href={"/"}>Home</Link>
                <Link href={"/shop"}>Shop</Link>
                <Link href={""}>About</Link>
                <Link href={""}>Contact</Link>
            </div>
            <div className="w-[247px] flex justify-between absolute right-[100px] ">
                <Image src={Icon1} alt="logo" />
                <Image src={Icon2} alt="logo" />
                <Image src={Icon3} alt="logo" />
                <Image src={Icon4} alt="logo" />
            </div>
        </nav >


    )
}
export default Navbar;
