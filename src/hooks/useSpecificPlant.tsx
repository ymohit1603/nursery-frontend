import axios from "axios";
import { useEffect, useState } from "react";

interface Plant {
    id: number;
    imgUrl: string;
    name: string;
    price: number;
    discountedPrice: number;
    cartButton: string;
    discount: number;
}


const useSpecificPlant = ({ id }: { id: number }) => {
    
    const [plant, setPlants] = useState<Plant>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        const fetchPlantsData = async () => {
            try {
                const response = await axios.get(`${backendUrl}/getPlants/${id}`);
                console.log("plant by id");
                console.log("Response Data:", response.data.plant); 

                if (response.data ) {
                    console.log("yup");
                    setPlants(response.data.plant);
                    setError(null);
                } else {
                    console.log("nup");
                    setError("Unexpected response format");

                }
            } catch (error) {
                setError("Error fetching plant data");
                console.error("Error fetching plant data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlantsData();
    }, [backendUrl, id]);


    return { plant,error,loading };
}

export default useSpecificPlant;
