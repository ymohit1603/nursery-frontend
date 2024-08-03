import Layout from "../../components/Layout"
import { AllPlants } from "../../components/ListAllPlants"
import Filters from "../../components/filters";

const Plants = () => {
    return <Layout>
         <div className="w-full flex flex-row">
            <div className="h-screen w-1/4 flex justify-center items-center ">
             <Filters />
            </div>
            <div className="w-3/4">
                <AllPlants />
            </div>
        </div>
    </Layout>
}
export default Plants;