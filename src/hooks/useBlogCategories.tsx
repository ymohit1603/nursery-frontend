import axios from "axios";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/hook";
import { setInitialState } from "../redux/slices/blogSlice";

interface blogTypes{
    id: number;
    title: string;
    imgUrl: string,
    name: string,
    content:string
}

const useBlogCategories = ({endpoints}:{endpoints:string}) => {
    const [blogs, setBlogs] = useState<blogTypes[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const dispatch = useAppDispatch();

    useEffect(() => {
        const result = async () => {
            try {
                const response = await axios.get(`${backendUrl}${endpoints}`);
                setBlogs(response.data.plants);
                const { likes, comments } = response.data;
                dispatch(setInitialState({ likes, comments }));
                console.log(response.data);
                console.log("useBlogCategories");
            }
            catch (error) {
                setError("Error fetching blogs");
            }
            finally {
                setLoading(false);
            }
        }
        result();
    }, [backendUrl, endpoints]);
    return { loading, blogs, error };
}

export default useBlogCategories;