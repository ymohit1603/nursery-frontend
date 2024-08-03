import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';

interface BuyPlantCardTypes {
    plantId: number,
    endpoint:string,
    imgUrl: string;
    name: string;
    price: number;
    discountedPrice: number;
    cartButton: string;
    discount: number;
}

export const BuyPlantCard: React.FC<BuyPlantCardTypes> = ({ plantId,imgUrl, name, discountedPrice, price, discount ,endpoint}) => {
    return <div className="relative my-10 flex w-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <Link className="relative  flex h-44 mt-2 overflow-hidden rounded-xl" to={`/${endpoint}/${plantId}`}>
                <img className="object-cover" src={imgUrl} alt="product image" />
                <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                    {discount}% OFF
                </span>
            </Link>
            <div className="mt-3 px-3 pb-3">
                <Link to={`/plant/${plantId}`}>
                    <h5 className="text-xl tracking-tight text-slate-900">{name}</h5>
                </Link>
                <div className=" flex items-center justify-between">
                    <p>
                        <span className="text-lg font-bold text-slate-900">Rs. {discountedPrice}</span>
                        <span className="text-sm text-slate-900 line-through">Rs. {price}</span>
                    </p>
                    <div className="flex items-center">                        
                    <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0 <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" /></span>
                    </div>
                </div>
                <Link to={`/${endpoint}/${plantId}`} className="flex items-center justify-center rounded-md bg-slate-900 mt-2 pr-10 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none"> </svg>
                <ShoppingCartIcon className='mr-2'/> Add to Cart</Link >
    </div>
  </div>
  
}