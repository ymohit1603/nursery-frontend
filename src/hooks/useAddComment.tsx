import axios from "axios";
import { useEffect, useState } from "react";


interface cTypes{
    name: string,
    content: string,
    id:string|undefined,
}

const useAddComment = ({ name, content, id }: cTypes) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [error, setError] = useState('');
    useEffect(() => {
        try {
            const result = axios.post(`${backendUrl}/blog/comment`, { name, content, id });
            console.log(result);
        }
        catch (e) {
            setError('Failed to comment');
        }
    }, [backendUrl, name, content, id])
    return error;
}

export default useAddComment;