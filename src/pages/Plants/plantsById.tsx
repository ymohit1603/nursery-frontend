import Layout from "../../components/Layout";
import Plants from "../../components/ListAllPlants/plantById";

const PlantById = () => {
    return <Layout>
        <Plants imgUrl={""} title={"cactus"} description={"dkfsdk"} currPrice={0} originalPrice={0} discount={0} quantity={0}/>
    </Layout>;
}

export default PlantById;