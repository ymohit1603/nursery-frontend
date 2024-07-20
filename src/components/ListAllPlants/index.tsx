import { useState, useEffect } from "react";
import axios from "axios";
import { BuyPlantCard } from "../card/BuyPlantCard";
import { Alert, CircularProgress } from "@mui/material";

interface Plant {
    id: number;
    imgUrl: string;
    name: string;
    price: number;
    discountedPrice: number;
    cartButton: string;
    discount: number;
}

export const AllPlants = () => {
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


    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Alert className="w-1/4" severity="error">{error}</Alert>;
    }

    return (
        <div className="">
             <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {plants.length > 0 &&
                plants.map((plant) => (
                    <BuyPlantCard
                        key={plant.id}
                        plantId={plant.id}
                        imgUrl={plant.imgUrl || ""}
                        name={plant.name || "name"}
                        price={plant.price || 20}
                        discountedPrice={plant.discountedPrice || 12}
                        cartButton={plant.cartButton || "button"}
                        discount={plant.discount || 3}
                    />
                ))
            }
        </div>
       </div>
    
    
        );
};