import {  useEffect, useState } from "react";
import Categories from "./categories";
import Prices from "./prices";
import { useAppDispatch } from "../../redux/hook";
import { fetchPlants } from "../../redux/slices/plantSlice";




const Filters = () => {
    const dispatch = useAppDispatch();
    const [cvalue, setcValue] = useState<string | null>(null);
    const [pvalue, setpValue] = useState<string | null>(null);

    useEffect(() => {
        dispatch(fetchPlants({ categoryFilter: cvalue, priceFilter: pvalue }));
      }, [cvalue, pvalue]);

    return <div className=" w-3/4 border flex flex-col p-3 rounded-lg shadow-lg">       
        <Categories value={cvalue } setValue={setcValue} />
        <Prices value={pvalue } setValue={setpValue}/>
    </div>
}

export default Filters;