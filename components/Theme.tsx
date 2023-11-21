import { LuMoonStar } from "react-icons/lu";
import { IoSunny } from "react-icons/io5";
import { useContext } from "react";
import { ThemeContext } from "@/provider/ThemeProvider";

interface ThemeProps {
    
}
 
const Theme: React.FC<ThemeProps> = () => {
    const{isDark, SwitchDark,SwitchLight} = useContext (ThemeContext)
    

    return ( 
        <div className="flex justify-end gap-5 mr-5 mt-3">
            {isDark === 'dark' ?  
            (<button onClick={SwitchLight}
                className="flex gap-3 bg-white min-w-[100px] text-yellow-400 shadow-lg rounded-full py-2">
                     <IoSunny size={25} /> Light
                     
                </button>):
            (  <button onClick={SwitchDark}
                className="flex gap-3 bg-black min-w-[100px] text-white shadow-lg rounded-full py-2">
                     <LuMoonStar size={25}/> Dark
                </button>)
          
           }

            
          
        </div>
     );
}
 
export default Theme;