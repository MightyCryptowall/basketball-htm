import { useContext } from "react";
import CardItem from "./CardItem";
import { playerContext } from "@/provider/PlayerProvider";

interface CardListProps {
    
}
 
const CardList: React.FC<CardListProps> = () => {
    const {data} = useContext(playerContext)
    return ( 
        <div className="grid grid-cols-3 w-[50%] mx-auto gap-5 ">
        {data?.map((item: any) => (
          <CardItem
            name={item.first_name}
            height_feet={item.height_feet}
            key={item.id}
          />
        ))}
      </div>
     );
}
 
export default CardList;