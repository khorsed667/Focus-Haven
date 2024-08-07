import { useEffect, useState } from "react";

const useFetch = () => {

    const [classes, setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://focus-haven-server.onrender.com/classes')
        .then(res => res.json())
        .then(classes => {
          setData(classes);
          setLoading(false);
          console.log(classes);
        })
      }, [])

      return [classes, loading];
};

export default useFetch;