import { useNavigate } from 'react-router-dom';
import homeNurseryImage from '../../assets/homeNursery.png';


export const Intro = () => {
    const navigate = useNavigate();
    const HandleBrowsePlant = () => {
        navigate('/plants');
    }
    return (
        <div className="p-4 flex flex-col md:flex-row items-center md:items-start m-10 mt-16 mb-32 md:h-screen max-h-96">
            <div className="w-2/3 ml-10 pl-6 p-3 md:mr-5 flex flex-col justify-center">
                <div className="text-5xl font-bold mb-4">Discover the Perfect Plants for Your Home</div>
                <div className="text-xl mb-3 text-slate-600">Browse our curated selection of lush, healthy plants and connect with your nearest plantly verified nursery to find the ideal greenery for your space.</div>
                <div className="flex space-x-4 mb-6 mt-10">
                    <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-slate-800" onClick={HandleBrowsePlant}>Browse Plants</button>
                    <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-slate-800">Browse Nurseries</button>
                </div>
            </div>
            <img src={homeNurseryImage} alt="Nursery" className="w-full max-h-80 object-contain rounded" />
        </div>
    );
};
