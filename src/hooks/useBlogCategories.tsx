import axios from "axios";
import { useEffect, useState } from "react";

interface blogTypes{
    imgUrl: string,
    name: string,
    content:string
}

const useBlogCategories = ({endpoints}:{endpoints:string}) => {
    const [blogs, setBlogs] = useState<blogTypes[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const result = async () => {
            try {
                const response = await axios.get(`${process.env.VITE_BACKEND_URL}/${endpoints}`);
                setBlogs(response.data);
            }
            catch (error) {
                setError("Error fetching blogs");
            }
            finally {
                setLoading(false);
            }
        }
        result();
    }, [endpoints]);
    return { loading, blogs, error };
}

export default useBlogCategories;