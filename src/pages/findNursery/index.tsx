import NurseryCard from "../../components/card/NurseryCard";
import { useAppSelector } from "../../redux/hook";

const Nursery = () => {

    const nearby = useAppSelector((state) => state.nursery.nurseries);
    const status = useAppSelector((state) => state.nursery.status);
    const error = useAppSelector((state) => state.nursery.error);


    return <div>
        <div>
        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p>Error: {error}</p>}
        {status === 'succeeded' &&
            nearby.map((nursery) => (
                <div>
                    <NurseryCard name={nursery.name} location={nursery.location} ratings={nursery.ratings} timing={nursery.timings} />
                </div>
            ))}
        </div>
    </div>
    
}
export default Nursery;