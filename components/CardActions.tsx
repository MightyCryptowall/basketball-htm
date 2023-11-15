import { AuthContext } from "@/provider/AuthProvider";
import { useContext } from "react";
import { MdEditSquare } from "react-icons/md";

interface CardActionsProps {
}

const CardActions: React.FC<CardActionsProps> = () => {
  // null so yin false
  // string tan bo si yin true
  const { loginUser } = useContext(AuthContext);
  if (!loginUser) return <></>; //JSX 


  //true
  return (
    <button className="absolute right-5">
      <MdEditSquare />
    </button>
  );
};

export default CardActions;
