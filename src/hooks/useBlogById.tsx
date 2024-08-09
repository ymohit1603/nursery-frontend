import axios from "axios";
import { useEffect, useState } from "react";


interface commentType{
    content: string,
    // createdAt:string
}

interface blogTypes{
    likes: blogTypes | undefined;
    createdAt: string | number | Date;
    authorImage: blogTypes | undefined;
    author: blogTypes | undefined;
    height: any;
    width: any;
    image: blogTypes | undefined;
    title: string,
    content: string
    comments:commentType[]
}

export const useBlogById = ({ endpoints }: { endpoints:string }) => {
    const [blog, setBlog] = useState<blogTypes>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

        useEffect(() => {
            const fetchBlog = async () => {
                try {
                    const result = await axios.get(`${backendUrl}/${endpoints}`);
                    setBlog(result.data.plants);
                } catch (error) {
                    setError('Error fetching blog');
                } finally {
                    setLoading(false);
                }
            };
    
            fetchBlog();
        }, [backendUrl, endpoints]);
    

    return { blog, loading, error };

}