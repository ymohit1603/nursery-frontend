import { Alert } from "@mui/material";
import useRecentBlogs from "../../hooks/useRecentBlogs";
import Recents from "./recents"; 

const BlogList = () => {
    const { recentBlogs, loading,error } = useRecentBlogs();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <Alert severity="error">{error}.</Alert>;
    }

    return (
        <div>
            {recentBlogs.map((val: { imgUrl: string; title: string; description: string; }, index) => (
                <Recents key={index} imgUrl={val.imgUrl} title={val.title} description={val.description} />
            ))}
        </div>
    );
}

export default BlogList;
