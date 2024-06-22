import { Link } from "react-router-dom";
import footerbg1 from "../../assets/footer3.jpg";

export const Footer = () => {
    return (
        <footer 
            className="relative  py-12 bg-cover bg-no-repeat" 
            style={{ backgroundImage: `url(${footerbg1})` }}
        >
            <div className="absolute inset-0 "></div>
            <div className="relative container mx-auto px-6 flex flex-col md:flex-row justify-evenly items-center space-y-6 md:space-y-0 md:space-x-6">
                <div className="p-6 rounded-lg shadow-md w-full md:w-auto">
                    <div className="text-4xl font-extrabold mb-2 text-center md:text-left">Logo</div>
                    <div className="text-2xl font-semibold text-center md:text-left">Plantly</div>
                </div>
                <div className=" w-full md:w-auto">
                    <div className="text-2xl font-semibold mb-4 text-center md:text-left">Quick Links</div>
                    <Link to="/home" className="hover:text-green-400 mb-2 transition duration-300 block text-center md:text-left">Home</Link>
                    <Link to="/about" className="hover:text-green-400 mb-2 transition duration-300 block text-center md:text-left">About</Link>
                    <Link to="/services" className="hover:text-green-400 mb-2 transition duration-300 block text-center md:text-left">Services</Link>
                    <Link to="/contact" className="hover:text-green-400 mb-2 transition duration-300 block text-center md:text-left">Contact</Link>
                </div>
                <div className="w-full md:w-auto">
                    <div className="text-2xl font-semibold mb-4 text-center md:text-left">Socials</div>
                    <Link to="/facebook" className="hover:text-green-400 mb-2 transition duration-300 block text-center md:text-left">Facebook</Link>
                    <Link to="/twitter" className="hover:text-green-400 mb-2 transition duration-300 block text-center md:text-left">Twitter</Link>
                    <Link to="/instagram" className="hover:text-green-400 mb-2 transition duration-300 block text-center md:text-left">Instagram</Link>
                    <Link to="/linkedin" className="hover:text-green-400 mb-2 transition duration-300 block text-center md:text-left">LinkedIn</Link>
                </div>
                <div className=" w-full md:w-auto">
                    <div className="text-2xl font-semibold mb-4 text-center md:text-left">Contact</div>
                    <div className="text-center md:text-left">
                        <div>Mahendergarh</div>
                        <div>Phone: +91 9050214638</div>
                        <div>Email: Plantly@gmail.com</div>
                    </div>
                </div>
            </div>
            <div className="relative mt-6 text-center text-gray-400">
                © 2024 Plantly. All rights reserved.
            </div>
        </footer>
    );
};
