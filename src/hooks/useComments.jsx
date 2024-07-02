import { useEffect, useState } from "react";

const useComment = () => {

    const [comments, setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://focus-haven-server.onrender.com/comments')
        .then(res => res.json())
        .then(comments => {
          setData(comments);
          setLoading(false);
          console.log(comments);
        })
      }, [])

      return [comments, loading];
};

export default useComment;