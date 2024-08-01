import { useEffect, useState } from "react";
import { BuyPlantCard } from "../card/BuyPlantCard";
import axios from "axios";
import { Alert, CircularProgress } from "@mui/material";


interface medicineTypes{
    id:number,
    imgUrl: string,
    name: string,
    price: number,
    discountedPrice: number,
    cartButton: string,
    discount:number
}

export const AllMedicines = () => {

    const [medicines, setMedicines] = useState<medicineTypes[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        const fetchMedicines = async () => {
            try {
                const response = await axios.get(`${backendUrl}/medicines`);
                setMedicines(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                setError("Error fetching mrdicine data");
                console.error("Error fetching medicine data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMedicines();
    }, []);

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Alert className="w-1/4" severity="error">{error}</Alert>;
    }


    return <div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
             {medicines.length > 0 &&medicines.map((med, index) => (
                 <BuyPlantCard 
                     key={index}
                     plantId={med.id}
                     imgUrl={med.imgUrl || ""}
                     name={med.name}
                     price={med.price}
                     discountedPrice={med.discountedPrice || 100}
                     cartButton="Add to cart."
                     discount={med.discount || 3}
                     endpoint={"medicines"} />
            ))}
        </div>
    </div>
}