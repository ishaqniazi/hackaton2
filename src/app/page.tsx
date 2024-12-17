import NavPage from "./components/1st-page/NavPage"
import Hero from "./components/1st-page/hero"
import Hero1 from "./components/1st-page/hero1"
import Hero2 from "./components/1st-page/hero2"
import Hero3 from "./components/1st-page/hero3"
import Hero4 from "./components/1st-page/hero4"


export default function Main() {
  return (


    <div className="w-[100%] flex flex-col items-center font-Poppins">
      <div className="bg-[#FBEBB5]  w-[1440px] h-[1000px]  " > </div>
      <NavPage />
      <Hero />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />


    </div>

  )
}