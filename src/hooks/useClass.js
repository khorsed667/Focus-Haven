import { useEffect, useState } from "react";

const useFetch = () => {

    const [classes, setData] = useState([])

    useEffect(()=>{
        fetch('https://focus-haven-server.onrender.com/classes')
        .then(res => res.json())
        .then(classes => {
          setData(classes)
          console.log(classes);
        })
      }, [])

      return [classes];
};

export default useFetch;