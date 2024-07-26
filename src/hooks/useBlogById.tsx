import axios from "axios";
import { useEffect, useState } from "react";

interface blogTypes{
    title: string,
    content:string
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