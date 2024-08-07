import axios from "axios";
import { useEffect, useState } from "react";

interface RecentType {
    imgUrl: string;
    title: string;
    description: string;
}

const useRecentBlogs = () => {
    const [recentBlogs, setRecentBlogs] = useState<RecentType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.VITE_BACKEND_URL}/recent`);
                setRecentBlogs(response.data);
            } catch (error) {
                setError("Error fetching recent blogs");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return { recentBlogs, loading, error };
}

export default useRecentBlogs;