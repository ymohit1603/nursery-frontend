import { Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AddComment = () => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [submit, setSubmit] = useState(false);
    const [check, setCheck] = useState(false);
    const [error, setError] = useState(false);

    const { id } = useParams();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        const addComment = async () => {
            try {
                const result = await axios.post(`${backendUrl}/blog/comment`, { name, content, id });
                console.log(result);
            } catch (e) {
                setError(true);
                console.error("Error while posting comment:", e);
            }
        };

        if (submit) {
            addComment();
            setSubmit(false);  
        }
    }, [submit, name, content, id, backendUrl]);

    const handleClick = () => {
        if (name && content) {
            setName('');
            setContent('');
            setCheck(false); 
            setSubmit(true);
        } else {
            setCheck(true);
        }
    };

    useEffect(() => {
        if (error) {
            const timeout = setTimeout(() => {
                setError(false);
            }, 5000);
            return () => clearTimeout(timeout); 
        }
    }, [error]);

    return (
        <div className="w-full mt-2 p-0 bg-white rounded-lg">
            <div className="font-semibold text-3xl mb-6 text-gray-800">Leave a Comment</div>
        
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input 
                    type="text" 
                    id="name" 
                    value={name}
                    onChange={(e) => { setName(e.target.value); setCheck(false); }}
                    placeholder="Enter your name" 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comment">
                    Comment
                </label>
                <textarea 
                    id="comment" 
                    value={content}
                    placeholder="Write your comment" 
                    onChange={(e) => { setContent(e.target.value); setCheck(false); }}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
                />
            </div>
            <div className="flex items-start flex-col justify-between">
                <button 
                    onClick={handleClick}
                    className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Post Comment
                </button>
                <div>
                    {check && (
                        <Alert severity="error" className="py-2 px-4 mt-3">Name and comment can't be empty</Alert>
                    )}
                </div>
                <div>
                    {error && (
                        <Alert severity="error" className="py-2 px-4 mt-3">Failed to post the comment. Please try again.</Alert>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AddComment;