import Categories from "./categories";
import Prices from "./prices";

const Filters = () => {
    return <div className=" w-3/4 border flex flex-col p-3 rounded-lg shadow-lg">
        
        <Categories/>
        <Prices/>
    </div>
}

export default Filters;