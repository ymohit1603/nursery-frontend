import { Alert } from "@mui/material";
import useBlogCategories from "../../../hooks/useBlogCategories";
import BlogBodyCard from "../../card/BlogBodyCard";


const IndoorBody = () => {
    const endpoints = '/blog/indoor';
    const { loading, blogs, error } = useBlogCategories({endpoints});

    if (loading) {
            return <div>loading...</div>
    }
    if (error) {
        return <Alert className="w-3/12" severity="error">{error}</Alert>           
    }

    return (            
            blogs.map((blog) => {
                return <BlogBodyCard imgUrl={blog.imgUrl} Name={blog.name} Description={blog.content}></BlogBodyCard>
                })
    );  
}

export default IndoorBody;