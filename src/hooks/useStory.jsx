import { useEffect, useState } from "react";

const useStory = () =>{
    const [story, setStory] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() =>{
        fetch('story.json')
        .then(res => res.json())
        .then(data => {
            setStory(data)
        setLoading(false)
    })
    },[])
    return [story, loading]

}

export default useStory;