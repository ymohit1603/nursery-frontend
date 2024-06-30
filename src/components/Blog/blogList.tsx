import useRecentBlogs from "../../hooks/useRecentBlogs";
import Recents from "./recents"; 

const BlogList = () => {
    const { recentBlogs, loading } = useRecentBlogs();

    if (loading) {
        return <div>Loading...</div>;
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
