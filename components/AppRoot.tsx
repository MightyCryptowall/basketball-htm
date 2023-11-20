import AuthProvider from "@/provider/AuthProvider";
import PlayerProvider from "@/provider/PlayerProvider";
import { ReactNode } from "react";

interface AppRootProps {
    children: ReactNode | ReactNode[]
}
 
const AppRoot: React.FC<AppRootProps> = ({children}) => {
    return ( 
        <AuthProvider>
            <PlayerProvider>
                {children}
            </PlayerProvider>
        </AuthProvider>
     );
}
 
export default AppRoot;