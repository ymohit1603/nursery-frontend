import {NavBar} from '../NavBar/NavBar';
import {Footer} from '../Footer/Footer';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <NavBar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;