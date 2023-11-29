import { useEffect, useState } from "react";

const useTourPackages = () =>{
    const [packages, setPackage] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() =>{
        fetch('https://b8a12-server-side-mahfuzar175.vercel.app/travelPackages')
        .then(res => res.json())
        .then(data => {
            setPackage(data)
        setLoading(false)
    })
    },[])
    return [packages, loading]

}

export default useTourPackages;