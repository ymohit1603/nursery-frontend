import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAppSelector } from '../../redux/hook';

export const NavBar = () => {
  const nurseryRef = useAppSelector((state) => state.scroll.nurseryRef);

  const scrollToNursery = () => {
    if (nurseryRef) {
      nurseryRef.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between items-center p-4 font-semibold bg-slate-50"
    >
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-300">
          Logo
        </Link>
      </div>
      <div className="flex w-2/3 justify-between ">
        <div className='flex justify-start space-x-6 mt-1'>
          <AddNavBar linkTo="/plants" val="Plants" />
          <AddNavBar linkTo="/medicines" val="Fertilizers" />
          <AddNavBar onClick={scrollToNursery} linkTo="#" val="Nursery" />
          <AddNavBar linkTo="/blog" val="Blogs" />
          <AddNavBar linkTo="/contact" val="Contact" />
        </div>
        <div className='flex space-x-6 justify-end'>
          <div className='border border-black rounded-lg px-3 py-1 hover:bg-gray-200'>
            <AddNavBar linkTo="/signin"  val={"Signin"} />
          </div>
          <AddNavBar linkTo="/cart" val={<ShoppingCartIcon />} />
        </div>
      </div>
    </motion.div>
  );
};

interface AddNavBarProps {
  linkTo: string;
  val: string | React.ReactNode;
  onClick?: () => void;
}

const AddNavBar: React.FC<AddNavBarProps> = ({ linkTo, val, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.9 }}
      className="relative"
      onClick={onClick}
    >
      <Link to={linkTo} className="text-gray-800 hover:text-gray-600 transition-colors duration-300">
        {val}
      </Link>
    </motion.div>
  );
};

export default NavBar;

