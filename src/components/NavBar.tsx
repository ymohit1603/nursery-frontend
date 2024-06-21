import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const NavBar = () => {
    return (<motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between items-center p-4 font-semibold"
    >
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-300">
          Logo
        </Link>
      </div>
      <div className="flex-1 flex justify-end space-x-4">
        <AddNavBar linkTo="/plants" val="Plants" />
        <AddNavBar linkTo="/medicines" val="Medicines" />
        <AddNavBar linkTo="/nursery" val="Nursery" />
        <AddNavBar linkTo="/about" val="About" />
        <AddNavBar linkTo="/contact" val="Contact" />
      </div>
    </motion.div>
  );
};

interface AddNavBarProps {
  linkTo: string;
  val: string;
}

const AddNavBar: React.FC<AddNavBarProps> = ({ linkTo, val }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative"
    >
      <Link to={linkTo} className="text-gray-800 hover:text-gray-600 transition-colors duration-300">
        {val}
      </Link>
    </motion.div>
  );
};

