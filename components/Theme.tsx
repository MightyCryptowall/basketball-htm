import { LuMoonStar } from "react-icons/lu";
import { IoSunny } from "react-icons/io5";
import { useContext } from "react";
import { ThemeContext } from "@/provider/ThemeProvider";
import { cn } from "@/lib/utils";

interface ThemeProps {}

const Theme: React.FC<ThemeProps> = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex justify-end gap-5 mr-5 mt-3">
      <button
        onClick={toggleTheme}
        className={cn(
          "flex justify-center",
          "transition-all duration-500 ease-linear",
          " gap-3 shadow-lg rounded-full p-3",
          isDark ? "bg-white text-yellow-400" : "bg-black text-white"
        )}
      >
        {isDark ? <IoSunny size={25} /> : <LuMoonStar size={25} />}
      </button>
    </div>
  );
};

export default Theme;
