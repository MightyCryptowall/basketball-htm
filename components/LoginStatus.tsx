import { AuthContext } from "@/provider/AuthProvider";
import { useContext } from "react";

interface LoginStatusProps {}

const LoginStatus: React.FC<LoginStatusProps> = () => {
  const { loginUser, setLoginUser } = useContext(AuthContext);
  const logout = () => {
    setLoginUser(null);
  }
  const login = () => {
    setLoginUser("yethiha");
  }
  return (
    <div className="flex justify-center items-center gap-5 py-5 mt-5">
      <h5 className="text-center  text-sm">Login as: {loginUser}</h5>
      {
        loginUser ? (
            <button
        type="button"
        className="text-xs bg-zinc-500 rounded-sm px-5 py-1 text-white font-bold"
        onClick={logout}
      >
        Logout
      </button>
        ) : (
            <button
        type="button"
        className="text-xs bg-zinc-500 rounded-sm px-5 py-1 text-white font-bold"
        onClick={login}
      >
        login
      </button>
        )
      }
      
    </div>
  );
};

export default LoginStatus;
