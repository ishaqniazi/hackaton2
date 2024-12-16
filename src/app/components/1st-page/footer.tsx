

// const Footer = () => {
//     return <>
//         <div className="w-[1440px] h-[555px] flex items-center ">
//             <div className="w-[1131px] h-[312px] flex items-center justify-center">
//                 <div className="w-[285px] h-[72px] font-normal text-[16px] leading-6 text-[#9F9F9F]">400 University Drive Suite 200 Coral Gables, <br />
//                     FL 33134 USA</div>
//                 <div className="w-[710px] h-[312px] flex flex-col  items-center justify-between">
//                     <div className="w-[352px] h-[312px] flex  items-between justify-between">
//                         <ul className="w-[68px] text-left h-[312px] left-[523.01px] font-medium text-[16px] leading-6 flex flex-col items-left justify-between">
//                             <li className=" text-[#9F9F9F]">Links</li>
//                             <li>Home</li>
//                             <li>Shop</li>
//                             <li>About</li>
//                             <li>Contact</li>
//                         </ul>
//                         <ul className=" w-[140px] h-[242px] font-medium  text-[16px] leading-6 flex flex-col items-left justify-between">
//                             <li className=" text-[#9F9F9F]">Help</li>
//                             <li>Payment Options</li>
//                             <li>Returns</li>
//                             <li>Privacy Policies</li>
//                         </ul>

//                         <ul className="w-[286px] h-[101px]  absolute right-[440.9px]">
//                             <li className="w-[86px] font-medium text-[16px] g leading-6 text-[#9F9F9F]">Newsletter</li>
//                             <li className="w-[286px] h-[24px]">
//                                 <div className="w-[173px] h-[21px]relative font-normal text-[14px] leading-[21px] pt-[53px] text-[#9F9F9F]">Enter Your Email Address</div>
//                                     <div className="w-[200px] border-[1px] border-black"></div>

//                                 <div className="absolute top-[78px] left-[230px]">
//                                     <div className="relative w-[75px] h-[21px] font-medium text-[14px] leading-[21px] ">SUBSCRIBE</div>
//                                     <div className="absolute  w-[75.01px] border-[1px] border-black">
//                                     </div>
//                                 </div>
//                             </li>
//                         </ul>
//                     </div>
   
//                 </div>
//              </div>
//              <div className="flex absolute flex-none items-end  border-[1px] bg-[#D9D9D9] w-[1240.01px] left-[190px]"> </div>
//             <div className=" absolute  top-[5140px] left-[290px] h-6 font-regular  text-[16px] leading-6">2022 Meubel House. All rights reverved</div>
            
           
//           </div>
//        </>
// }
// export default Footer;

import Link from "next/link";
export default function Footer() {
    return (
      <
          footer className="mb-0 w-[100%] py-5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div>
            <h3 className="font-bold text-[24px] ml-[136px] mt-[106px] mb-[50px] text-black"></h3>
            <p >
              400 University Drive Suite 200 Coral <br /> Gables,
              <br /> FL 33134 USA.
            </p>
          </div>
  
          <div>
            <h3 className="font-semibold text-lg mb-[55px] text-gray-400">Links</h3>
            <ul className=" flex flex-col gap-[46px]">
              <li>
                <Link href="/home" className="text-black hover:text-yellow-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-black hover:text-yellow-500">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-black hover:text-yellow-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-black hover:text-yellow-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
  
         
          <div>
            <h3 className="font-semibold text-lg mb-[55px] text-gray-400">Help</h3>
            <ul className=" flex flex-col gap-[46px]">
              <li>
                <a href="#" className="text-black hover:text-yellow-500">
                  Payment option
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-yellow-500">
                  Return
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-yellow-500">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>
  
         
          <div>
            <h3 className="font-semibold text-lg text-gray-400">Newsletter</h3>
            <form className="flex items-center mt-6">
             
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent border-b-2 border-black text-black focus:outline-none focus:border-yellow-500 placeholder-gray-500"
                />
              </div>
             
              <button
                type="submit"
                className="ml-4 border-b-2 border-black text-black focus:border-yellow-500 hover:text-yellow-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
  <hr/>
       
        <div className="text-left pl-[80px] text-gray-500 mt-8">
          2022 Meubel House. All rights reserved.
        </div>
      </footer>
    );
  }