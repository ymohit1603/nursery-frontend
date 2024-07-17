import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { fetchNursery } from "../../redux/slices/nurserySlice";
import { useAppDispatch } from "../../redux/hook";

interface nurseryTypes{
    title: string,
    Description: string,
    placeholder:string,
    buttonText:string,
}

export const NearestNursery: React.FC<nurseryTypes> = ({ title, Description, placeholder, buttonText }) => {

    const [input, setInput] = useState("");
    
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(fetchNursery(input));
        navigate('/findNursery');
    }


    return <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50">
        <div className="font-extrabold text-5xl mb-4 ">{title}</div>
        <div className="text-lg text-slate-700 mb-2">{Description}</div>
        <input type="search" id="default-search" className="block mb-2 w-72 p-3 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " onChange={(e) => { setInput(e.target.value);}} placeholder={placeholder} required />
        <button type="button" onClick={handleClick} className="focus:outline-none w-40 text-white bg-black hover:bg-slate-900 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-md px-5 py-2.5 mb-2 mr-3">{buttonText}</button>
    </div>
}