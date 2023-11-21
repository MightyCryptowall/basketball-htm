import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface ThemeProviderProps {
    children: ReactNode | ReactNode[]
}
 export const ThemeContext = createContext(
    {} as {
        isDark: string
        setIsDark: Dispatch<SetStateAction<string>>
        SwitchDark: () => void
        SwitchLight: () => void
    }
 )
const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
    const[isDark,setIsDark] = useState('dark')

    const SwitchDark = () => {
        setIsDark('dark')
    }
    const SwitchLight = () => {
        setIsDark('light')
    }

    return ( 
        <ThemeContext.Provider value={{isDark,setIsDark,SwitchDark,SwitchLight}}>
            <div className={`${isDark} `}>{children}</div>
        </ThemeContext.Provider>
     );
}
 
export default ThemeProvider;