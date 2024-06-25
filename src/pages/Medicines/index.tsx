import { AllMedicines } from "../../components/AllMeds"
import { Footer } from "../../components/Footer/Footer"
import { NavBar } from "../../components/NavBar/NavBar"


export const Medicines = () => {
    return <div>
        <NavBar/>
        <AllMedicines />
        <Footer/>
    </div>
}