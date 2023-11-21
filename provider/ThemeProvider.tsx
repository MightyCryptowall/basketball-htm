import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";

interface ThemeProviderProps {
    children: ReactNode | ReactNode[]
}
 export const ThemeContext = createContext(
    {} as {
        theme: string;
        isDark: boolean;
        setTheme: Dispatch<SetStateAction<string>>;
        toggleTheme: () => void;
    }
 )
const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
    const[theme,setTheme] = useState('dark')
    const isDark = theme == "dark";
    
    const toggleTheme = () => setTheme(isDark ? "light" : "dark");

    useEffect(() => {
       const htmlTag = document.querySelector("html") as HTMLHtmlElement;
       if(isDark){
        htmlTag?.classList?.add("dark");
       }else{
        htmlTag?.classList?.remove("dark");
       }
    },[theme])


    return ( 
        <ThemeContext.Provider value={{theme, isDark, setTheme,toggleTheme}}>
            <div className={`${theme} `}>{children}</div>
        </ThemeContext.Provider>
     );
}
 
export default ThemeProvider;