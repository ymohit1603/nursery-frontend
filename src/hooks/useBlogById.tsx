import axios from "axios";
import { useEffect, useState } from "react";

interface blogTypes{
    title: string,
    description:string
}

export const useBlogById = ({ endpoints }: { endpoints:string }) => {
    const [blog, setBlog] = useState<blogTypes>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

        useEffect(() => {
            const fetchBlog = async () => {
                try {
                    const result = await axios.get(`${process.env.VITE_BACKEND_URL}/${endpoints}`);
                    setBlog(result.data);
                } catch (error) {
                    setError('Error fetching blog');
                } finally {
                    setLoading(false);
                }
            };
    
            fetchBlog();
        }, [endpoints]);
    

    return { blog, loading, error };

}