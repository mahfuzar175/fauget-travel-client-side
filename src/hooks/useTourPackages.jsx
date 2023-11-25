import { useEffect, useState } from "react";

const useTourPackages = () =>{
    const [packages, setPackage] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() =>{
        fetch('http://localhost:5000/travelPackages')
        .then(res => res.json())
        .then(data => {
            setPackage(data)
        setLoading(false)
    })
    },[])
    return [packages, loading]

}

export default useTourPackages;