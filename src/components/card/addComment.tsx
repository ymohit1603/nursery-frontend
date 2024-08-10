import { Alert, Button, TextField, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Comment {
    content: string;
    name: string;
    postedOn: string;
}

interface AddCommentProps {
    onAddComment: (comment: Comment) => void;
}

const AddComment = ({ onAddComment }: AddCommentProps) => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const { id } = useParams();
    const pId = Number(id);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const handleSubmit = async () => {
        if (!name || !content) {
            setStatus("error");
            return;
        }

        try {
            const result = await axios.post(`${backendUrl}/blog/comment`, { name, content, pId }, { withCredentials: true });
            onAddComment(result.data.comment);
            setName('');
            setContent('');
            setStatus("success");
        } catch (error) {
            console.error("Error while posting comment:", error);
            setStatus("error");
        }
    };

    useEffect(() => {
        if (status !== "idle") {
            const timeout = setTimeout(() => setStatus("idle"), 5000);
            return () => clearTimeout(timeout);
        }
    }, [status]);

    return (
        <Box className="w-full mt-2 p-0 bg-white rounded-lg">
            <Typography variant="h4" className="mb-6 text-gray-800">Leave a Comment</Typography>
            
            <TextField
                fullWidth
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
                margin="normal"
            />
            
            <TextField
                fullWidth
                label="Comment"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
            />

            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                className="mt-4"
            >
                Post Comment
            </Button>

            {status === "error" && (
                <Alert severity="error" className="mt-3">
                    {name && content ? "Failed to post the comment. Please try again." : "Name and comment can't be empty"}
                </Alert>
            )}

            {status === "success" && (
                <Alert severity="success" className="mt-3">
                    Comment added successfully!
                </Alert>
            )}
        </Box>
    );
};

export default AddComment;
