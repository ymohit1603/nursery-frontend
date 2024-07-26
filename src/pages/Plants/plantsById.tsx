import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import Plants from "../../components/ListAllPlants/plantById";
import useSpecificPlant from "../../hooks/useSpecificPlant";
import { Alert, CircularProgress } from "@mui/material";
import Review from "../../components/card/Review";


type RouteParams = {
    id: string;
  };
  
const PlantById = () => {

    const { id } = useParams<RouteParams>();
    const numericId = Number(id);
    const { plant, error, loading } = useSpecificPlant({ id: numericId });
    
    if (loading) {
        return <div className="w-screen h-screen flex justify-center items-center"><CircularProgress />;</div>
    }

    if (error) {
        return <Alert className="w-1/4" severity="error">{error}</Alert>;
    }




    return <Layout>
        {plant && <Plants imgUrl={plant.imgUrl} title={plant.name} discount={plant.discount} quantity={0} plantId={plant.id} description={"This is a plant"} currPrice={plant.price} originalPrice={0} />}
        <Review/>
    </Layout>;
}

export default PlantById;