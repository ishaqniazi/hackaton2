import Navbar from "@/app/components/Navbar"
import Hero from "./components/hero"
import Hero1 from "./components/hero1"

export default function Main (){
  return(
    
    <div  className="w-[100%] flex flex-col items-center">
        <Navbar/>
        <Hero/>
        <Hero1/>
        
      </div>

  )
}