import { NavBar } from "../components/NavBar/NavBar"
import { BuyPlantCard } from "../components/PlantCard/BuyPlantCard"

export const Plants = () => {
    return <div>
        <NavBar />
        <BuyPlantCard imgUrl={""} name={""} price={0} discountedPrice={0} cartButton={""} discount={0}/>
    </div>
}