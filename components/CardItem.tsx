
import { MdEditSquare } from "react-icons/md";
import CardActions from "./CardActions";
import { ThemeContext } from "@/provider/ThemeProvider";

interface CardItemProps {
  name: string;
  height_feet: string;
}

const CardItem: React.FC<CardItemProps> = ({ name, height_feet }) => {
 
  return (
    <div className="flex flex-col p-5 border-2 shadow-lg rounded-lg relative">
      <h5>Name: {name} </h5>
      <p>Height {height_feet} ft</p>
      <CardActions/>
    </div>
  );
};

export default CardItem;
