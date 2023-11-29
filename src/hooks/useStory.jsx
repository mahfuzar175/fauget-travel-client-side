import { useEffect, useState } from "react";

const useStory = () =>{
    const [story, setStory] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() =>{
        fetch('https://b8a12-server-side-mahfuzar175.vercel.app/stories')
        .then(res => res.json())
        .then(data => {
            setStory(data)
        setLoading(false)
    })
    },[])
    return [story, loading]

}

export default useStory;