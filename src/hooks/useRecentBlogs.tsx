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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/recent');
                setRecentBlogs(response.data);
            } catch (error) {
                console.log("error fetching recent blogs");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return { recentBlogs, loading };
}

export default useRecentBlogs;