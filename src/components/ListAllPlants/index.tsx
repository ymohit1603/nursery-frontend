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
    plants;
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
            {/* {plants.map((plant, index) => ( */}
                <BuyPlantCard
                // key={index}
                    plantId={1}
                    imgUrl=""
                    name="name"
                    price={ 20}
                    discountedPrice={12}
                    cartButton="button"
                    discount={3}
                />
            {/* ))} */}
        </div>
    );
};

// key={index}
// plantId={plants.id}
// imgUrl={plant.imgUrl||""}
// name={plant.name||"name"}
// price={plant.price||20}
// discountedPrice={plant.discountedPrice||12}
// cartButton={plant.cartButton||"button"}
// discount={plant.discount||3}