import { useNavigate } from 'react-router-dom';
import homeNurseryImage from '../../assets/homeNursery.png';
import { useAppSelector } from '../../redux/hook';


export const Intro = () => {
    const nurseryRef = useAppSelector((state) => state.scroll.nurseryRef);
    const navigate = useNavigate();
    const HandleBrowsePlant = () => {
        navigate('/plants');
    }
    const scrollToNursery = () => {
        if (nurseryRef) {
          nurseryRef.scrollIntoView({ behavior: 'smooth' });
        }
      }
    return (
        <div className='flex justify-center items-center h-screen ml-16'>
             <div className="flex flex-row">
                <div className=" ml-8 p-3 md:mr-5 ">
                    <div className="text-5xl font-bold mb-6">Discover the Perfect Plants for Your Home</div>
                    <div className="text-xl mb-3 text-slate-600">Browse our curated selection of lush, healthy plants and connect with your nearest plantly verified nursery to find the ideal greenery for your space.</div>
                    <div className="flex space-x-4 mb-6 mt-10">
                        <button className="bg-black w-40 text-white py-2 px-4 rounded-md hover:bg-slate-800" onClick={HandleBrowsePlant}>Browse Plants</button>
                        <button className="bg-black w-40 text-white py-2 px-4 rounded-md hover:bg-slate-800" onClick={scrollToNursery}>Browse Nurseries</button>
                    </div>
                </div>
                <img src={homeNurseryImage} alt="Nursery" className="w-full max-h-80 object-contain rounded" />
        </div>
       </div>
    );
};
