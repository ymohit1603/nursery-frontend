import { Intro } from '../components/Intro';
import { NavBar } from '../components/NavBar';
import { PlantCategories } from '../components/PlantCategories';

export const HomePage = () => {
    return (
        <div>
            <NavBar />
            <Intro />
            <PlantCategories/>
        </div>
    );
};