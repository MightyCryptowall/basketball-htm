"use client"
import LoginStatus from "@/components/LoginStatus";

interface LoginProps {
    
}
 
const Login: React.FC<LoginProps> = () => {
    return ( 
       <div>
         <h3>Login</h3>
         <LoginStatus/>
       </div>
     );
}
 
export default Login;