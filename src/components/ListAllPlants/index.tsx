import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { BuyPlantCard } from "../card/BuyPlantCard";
import { Alert, CircularProgress } from "@mui/material";
import { fetchPlants } from "../../redux/slices/plantSlice";



export const AllPlants = () => {
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        console.log("useEffect");
        dispatch(fetchPlants({ categoryFilter: null, priceFilter: null }));
    }, []);
    
    console.log("renders");

    const selector = useAppSelector;
    const { loading, error, plants } = selector((state) => state.plants);

    if (loading) {
        return <div className="w-screen h-screen flex justify-center items-center"><CircularProgress /></div>;
    }

    if (error) {
        return <Alert className="w-1/4" severity="error">{error}</Alert>;
    }
    if (!Array.isArray(plants)) {
        return <Alert className="w-1/4" severity="error">Unexpected data format</Alert>;
    }


    return (
        <div className="">
             <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {
                plants.length>0?plants.map((plant) => (
                    <BuyPlantCard
                        key={plant.id}
                        plantId={plant.id}
                        imgUrl={plant.imgUrl || ""}
                        name={plant.name || "name"}
                        price={plant.price || 20}
                        discountedPrice={plant.discountedPrice || 12}
                        cartButton={plant.cartButton || "button"}
                        discount={plant.discount || 3} endpoint={"plant"}                    />
                )) : <Alert className="" severity="info">No plant found</Alert>
                
            }
        </div>
       </div>
    
    
        );
};