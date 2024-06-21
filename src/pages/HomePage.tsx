import { Intro } from '../components/Intro';
import { NavBar } from '../components/NavBar';
import { PlantCategories } from '../components/PlantCategories';
import { PlantMedicines } from '../components/PlantMedicines';

const MedicineValues = 
{
    title: "Buy Fertilizers",
    description: "Discover our selection of plant-based medicines and supplements to support your health and wellness.",
    imageUrl: "https://via.placeholder.com/150",
    buttonText:"Explore Fertilizers",
}


export const HomePage = () => {
    return (
        <div>
            <NavBar />
            <Intro />
            <PlantCategories />
            <PlantMedicines title={MedicineValues.title} description={MedicineValues.description} imageUrl={MedicineValues.imageUrl} buttonText={MedicineValues.buttonText}/>
        </div>
    );
};