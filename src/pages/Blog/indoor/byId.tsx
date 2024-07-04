import Layout from "../../../components/Layout";
import IndoorPlantById from "../../../components/Blog/specific/byId"

const SpecificIndoorPlant = ({ id}:{id:number}) => {
    return <Layout>
        <IndoorPlantById endpoints={`blog/indoor/:${id}`}/>
    </Layout >
}

export default SpecificIndoorPlant;