
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className="flex justify-between items-center p-4 font-semibold">
            <div className="flex-1">
                <Link to="/">Logo</Link>
            </div>
            <div className="flex-1 flex justify-end space-x-4">
                <AddNavBar linkTo="/plants" val="Plants" />
                <AddNavBar linkTo="/medicines" val="Medicines" />
                <AddNavBar linkTo="/nursery" val="Nursery" />
                <AddNavBar linkTo="/about" val="About" />
                <AddNavBar linkTo="/contact" val="Contact" />
            </div>
        </div>
    );
}

interface AddNavBarTypes {
    linkTo: string;
    val: string;
}

function AddNavBar({ linkTo, val }: AddNavBarTypes) {
    return (
        <div>
            <Link to={linkTo} className="hover:text-gray-400">
                {val}
            </Link>
        </div>
    );
}


