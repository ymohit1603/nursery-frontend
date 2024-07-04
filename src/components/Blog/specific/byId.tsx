import { Alert } from "@mui/material";
import { useBlogById } from "../../../hooks/useBlogById";
import Intro from "../intro";


const IntroData = {
    title: "Introducing the Majestic Monstera",
    description:"Discover the captivating beauty and unique features of this iconic houseplant."
}


const SpecificPlant = ({ endpoints }:{endpoints:string}) => {
    const { blog, loading, error } = useBlogById({ endpoints });

    if (loading) return <div>Loading...</div>;
    if (error) return <Alert className="w-3/12" severity="error">{error }</Alert>;

    return (
        <div>
            <Intro title={IntroData.title} description={IntroData.description} />
            <div>{blog&&blog.title}</div>
            <div>{blog&&blog.description }</div>
        </div>
    );
}
export default SpecificPlant;