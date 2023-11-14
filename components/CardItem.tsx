interface CardItemProps {
    name: string;
    height_feet: string;
}
 
const CardItem: React.FC<CardItemProps> = ({
    name,
    height_feet
}) => {
    return ( 
        <div className="flex flex-col p-5 border border-black rounded-lg">
            <h5>Name: {name} </h5>
            <p>Height {height_feet} ft</p>
        </div>
     );
}
 
export default CardItem;