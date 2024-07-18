// import { useEffect, useState } from "react";
import { BuyPlantCard } from "../card/BuyPlantCard";
// import axios from "axios";

// interface medicineTypes{
//     imgUrl: string,
//     name: string,
//     price: number,
//     discountedPrice: number,
//     cartButton: string,
//     discount:number
// }



export const AllMedicines = () => {

    // const [medicines, setMedicines] = useState<medicineTypes[]>([]);

    // useEffect(() => {
    //     const fetchMedicines = async () => {
    //         try {
    //             const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/medicines`);
    //             setMedicines(response.data);
    //         } catch (error) {
    //             console.error("Error fetching medicines:", error);
    //         }
    //     };

    //     fetchMedicines();
    // }, []);

    return <div>
        <div>
             {/* {medicines.map((med, index) => (
                <BuyPlantCard 
                     key={index}
                     imgUrl={med.imgUrl}
                     name={med.name}
                     price={med.price}
                     discountedPrice={med.discountedPrice}
                     cartButton={med.cartButton}
                     discount={med.discount} plantId={0}                />
            ))} */}
            <BuyPlantCard plantId={0} imgUrl={""} name={""} price={0} discountedPrice={0} cartButton={""} discount={0} />
        </div>
    </div>
}