import axios from "axios";
import { useEffect, useState } from "react";


/*
    Custom hook's name started is "use"
    we use custom hook to reduce the code duplication
*/

const useFetchData = (url:string) => {
  const [data, setData] = useState<any>([]);
  const fetchData = async () => {
    const Player_data = await axios.get(
      url
    );
    console.log(Player_data.data.data);
    setData(Player_data.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    setData
  }
};

export default useFetchData;
