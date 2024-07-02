import { useEffect, useState } from "react";

const useInstractor = () => {

    const [instractors, setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://focus-haven-server.onrender.com/instractors')
        .then(res => res.json())
        .then(classes => {
          setData(classes);
          setLoading(false);
          console.log(instractors);
        })
      }, [])

      return [instractors, loading];
};

export default useInstractor;