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

const usePlantById = () => {
    
    const [plants, setPlants] = useState<Plant[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        const fetchPlantsData = async () => {
            try {
                const response = await axios.get(`${backendUrl}/getPlants`);
                console.log("Response Data:", response.data); 

                if (response.data && Array.isArray(response.data.plants)) {
                    setPlants(response.data.plants);
                    setError(null);
                } else {
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
    }, [loading]);

    return { loading, error, plants };
}

export default usePlantById;