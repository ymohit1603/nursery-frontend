import  { useState, useEffect } from "react";
import axios from "axios";
import { BuyPlantCard } from "../card/BuyPlantCard";

interface Plant {
    imgUrl: string;
    name: string;
    price: number;
    discountedPrice: number;
    cartButton: string;
    discount: number;
}
export const AllPlants = () => {
    const [plants, setPlants] = useState<Plant[]>([]);

    useEffect(() => {
        const fetchPlantsData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getPlants`);
                setPlants(response.data);
            } catch (error) {
                console.error("Error fetching plant data:", error);
            }
        };

        fetchPlantsData();
    }, []);

    return (
        <div>
            {plants.map((plant, index) => (
                <BuyPlantCard 
                    key={index}
                    imgUrl={plant.imgUrl}
                    name={plant.name}
                    price={plant.price}
                    discountedPrice={plant.discountedPrice}
                    cartButton={plant.cartButton}
                    discount={plant.discount}
                />
            ))}
        </div>
    );
};