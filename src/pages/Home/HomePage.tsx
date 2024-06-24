import { Footer } from '../../components/Footer/Footer';
import { Intro } from '../../components/HomePage/Intro';
import { NavBar } from '../../components/NavBar/NavBar';
import { NearestNursery } from '../../components/HomePage/NearestNursery';
import { PlantCategories } from '../../components/HomePage/PlantCategories';
import { PlantMedicines } from '../../components/HomePage/PlantMedicines';

const MedicineValues = 
{
    title: "Buy Fertilizers",
    description: "Discover our selection of plant-based medicines and supplements to support your health and wellness.",
    imageUrl: "https://via.placeholder.com/150",
    buttonText:"Explore Fertilizers",
}

const NurseryValues = {
    title:"Find Your Local Nursery",
    Description: "Enter your location to discover the nearest nursery partners and get the plants you love delivered to your door.",
    placeholder:"Enter Your Zip Code",
    buttonText:"Find Nursery",
}

export const HomePage = () => {
    return (
        <div>
            <NavBar />
            <Intro />
            <PlantCategories />
            <PlantMedicines title={MedicineValues.title} description={MedicineValues.description} imageUrl={MedicineValues.imageUrl} buttonText={MedicineValues.buttonText} />
            <NearestNursery title={NurseryValues.title} Description={NurseryValues.Description} placeholder={NurseryValues.placeholder} buttonText={NurseryValues.buttonText} />
            <Footer/>
        </div>
    );
};