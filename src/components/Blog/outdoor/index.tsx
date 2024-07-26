import { Alert } from "@mui/material";
import useBlogCategories from "../../../hooks/useBlogCategories";
import BlogBodyCard from "../../card/BlogBodyCard";


const OutdoorBody = () => {
    const endpoints = '/blog/outdoor';
    const { loading, blogs, error } = useBlogCategories({endpoints});

    if (loading) {
            return <div>loading...</div>
    }
    if (error) {
        return <Alert className="w-3/12" severity="error">{error}</Alert>
    }
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {
              blogs.length>0?
              blogs.map((blog,index) => {
                  return <BlogBodyCard key={index} imgUrl={blog.imgUrl} title={blog.title} Description={blog.content} Name={""} id={blog.id}></BlogBodyCard>
              }) :
              <Alert className="w-3/12" severity="info">No blogs found</Alert>
        }
    </div>
    );
}

export default OutdoorBody;

