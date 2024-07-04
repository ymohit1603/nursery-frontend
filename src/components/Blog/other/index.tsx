import { Alert } from "@mui/material";
import BlogBodyCard from "../../card/BlogBodyCard";
import useBlogCategories from "../../../hooks/useBlogCategories";


const OtherBody = () => {
    const endpoints = '/blog/other';
    const { loading, blogs, error } = useBlogCategories({endpoints});

    if (loading) {
            return <div>loading...</div>
    }
    if (error) {
        return <Alert className="w-3/12" severity="error">{error}</Alert>          
    }

    return (
        blogs.map((blog) => {
            <BlogBodyCard imgUrl={blog.imgUrl} Name={blog.name} Description={blog.content}></BlogBodyCard>
        })
    );
}

export default OtherBody;