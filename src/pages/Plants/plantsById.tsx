import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import Plants from "../../components/ListAllPlants/plantById";
import useSpecificPlant from "../../hooks/useSpecificPlant";
import { Alert, CircularProgress, Divider } from "@mui/material";
import Review from "../../components/card/Review";
import CustomerReviews from "../../components/card/userReviews";
import { fetchReviews } from "../../redux/slices/reviewSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useEffect } from "react";


type RouteParams = {
    id: string;
  };
  
const PlantById = () => {
    
    const { id } = useParams<RouteParams>();
    const numericId = Number(id);
    const dispatch = useAppDispatch();
    const reviews = useAppSelector((state) => state.review.reviews);
    const reviewStatus = useAppSelector((state) => state.review.status);
    const reviewError = useAppSelector((state) => state.review.error);
  
    useEffect(() => {
        if (reviewStatus === 'idle') {
            dispatch(fetchReviews(numericId));
      }
    }, [dispatch, numericId, reviewStatus]);
   
    const { plant, error, loading } = useSpecificPlant({ id: numericId });

    
    if (loading) {
        return <div className="w-screen h-screen flex justify-center items-center"><CircularProgress />;</div>
    }

    if (error) {
        return <Alert className="w-1/4" severity="error">{error}</Alert>;
    }
    if (!plant) {
        return <Alert className="w-1/4" severity="error">No Plant found</Alert>
    }

    return <Layout>
        <div className="w-full flex justify-center">
            <div className='w-1/2 '>    
                <div className="w-full">
                    <Plants imgUrl={plant.imgUrl} title={plant.name} discount={plant.discount} quantity={0} plantId={plant.id} description={"This is a plant"} currPrice={plant.price} originalPrice={0} />
                    <Review productId={numericId} />
                    <Divider sx={{ my: 2 }} />
                    <div className="min-w-3xl mb-4 ">
                        {reviewStatus === 'loading' && <div className="w-screen h-screen flex justify-center items-center"><CircularProgress />;</div>}
                        {reviewStatus === 'failed' &&  <Alert className="w-1/3" severity="error">{reviewError}</Alert>}
                        {reviewStatus === 'succeeded' && (        
                        <div className="bg-black  h-fit "> <CustomerReviews reviews={reviews}/></div>
                        )}  
                    </div>
                </div>
            </div>
        </div>
    </Layout>
}

export default PlantById;