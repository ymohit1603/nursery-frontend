import Layout from "../../../components/Layout";
import IndoorPlantById from "../../../components/Blog/specific/byId"
import { useParams } from "react-router-dom";

const SpecificIndoorPlant = () => {
    const id = useParams;
    return <Layout>
        <IndoorPlantById endpoints={`blog/indoor/:${id}`}/>
    </Layout >
}

export default SpecificIndoorPlant;