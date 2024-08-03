import usePlantById from "../../hooks/usePlantById";
import { BuyPlantCard } from "../card/BuyPlantCard";
import { Alert, CircularProgress } from "@mui/material";



export const AllPlants = () => {
    const { loading, error, plants } = usePlantById();

    if (loading) {
        return <div className="w-screen h-screen flex justify-center items-center"><CircularProgress /></div>;
    }

    if (error) {
        return <Alert className="w-1/4" severity="error">{error}</Alert>;
    }

    return (
        <div className="">
             <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {
                plants.map((plant) => (
                    <BuyPlantCard
                        key={plant.id}
                        plantId={plant.id}
                        imgUrl={plant.imgUrl || ""}
                        name={plant.name || "name"}
                        price={plant.price || 20}
                        discountedPrice={plant.discountedPrice || 12}
                        cartButton={plant.cartButton || "button"}
                        discount={plant.discount || 3} endpoint={"plant"}                    />
                ))
            }
        </div>
       </div>
    
    
        );
};