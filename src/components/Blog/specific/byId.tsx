import { Alert, Container, Typography, Card, CardContent, CircularProgress, Box, Avatar, Grid } from "@mui/material";
import { useBlogById } from "../../../hooks/useBlogById";
// import { useAppDispatch } from "../../../redux/hook";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AddComment from "../../card/addComment";
import Comments from "../../card/comments";
import { useEffect, useState } from "react";
// import BookmarkIcon from '@mui/icons-material/Bookmark';

// const IntroData = {
//     title: "Introducing the Majestic Monstera",
//     description: "Discover the captivating beauty and unique features of this iconic houseplant."
// };
interface Comment {
    content: string;
    name: string;
    postedOn: string;
}

const SpecificPlant = ({ endpoints }: { endpoints: string }) => {
    const { blog, loading, error } = useBlogById({ endpoints });
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        if (blog && blog.comments) {
            setComments(blog.comments);
        }
    }, [blog]);
    
    console.log(blog);

    if (loading) return (
        <Container className="flex justify-center items-center h-screen">
            <CircularProgress />
        </Container>
    );

    if (error) return (
        <Container className="flex justify-center items-center h-screen">
            <Alert severity="error" className="w-3/12">
                {error}
            </Alert>
        </Container>
    );

    if (!blog) {
        return <Alert severity="info" className="w-3/12">
        No blog found
    </Alert>
    }

    const handleAddComment = (newComment: { content: string, name: string, postedOn: string }) => {
        setComments((prevComments) => [...prevComments, newComment]);
    };
    
    return (
        <div className="w-full flex justify-center">
            <div className="w-2/3 ">
            <div className="mx-10 mb-8">
                <Container style={{padding:'0px',margin:'0px'}}>
                {/* <Intro title={IntroData.title} description={IntroData.description} /> */}
                <Card className="mt-10 shadow-lg">
                    <Box
                        className="relative bg-gray-200 flex items-center justify-center"
                        style={{ height: '300px', padding: '20px' }}
                    >
                        <img
                            src={blog && blog.image}
                            alt={blog && blog.title}
                            className="w-full h-full object-cover rounded-t-lg"
                        />
                        <Typography
                            variant="caption"
                            className="absolute bottom-2 right-2 bg-gray-800 text-white p-1 rounded"
                        >
                            {blog && blog.image && `${blog.image.width} x ${blog.image.height}`}
                        </Typography>
                    </Box>
                    <CardContent>
                        <Typography variant="h4" className="font-bold mb-4">
                            {blog && blog.title}
                        </Typography>
                        <Typography variant="body1" className="text-justify mb-4">
                            {blog && blog.content}
                        </Typography>
                        <Grid container alignItems="center" className="mb-4">
                            <Avatar alt={blog && blog.author} src={blog && blog.authorImage} />
                            <Box ml={2}>
                                <Typography variant="body2" color="textSecondary">
                                    Posted by: {blog && blog.author}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Posted on: {blog && new Date(blog.createdAt).toLocaleDateString()}
                                </Typography>
                            </Box>
                        </Grid>
                        
                        <div style={{ marginLeft: 'auto' }}>
                                    <FavoriteBorderIcon color="secondary"/>: {blog && blog.likes}
                                    <BookmarkBorderIcon color="secondary" />
                        </div>  
                        
                    </CardContent>
                </Card>
                </Container>
                </div>
                <div className="my-4 mx-10 border-t border-gray-300"></div>
                <div className="flex justify-start w-1/2 mx-10"><AddComment  onAddComment={handleAddComment} /> </div>
                <div className="my-4 mx-10 mt-7 border-t border-gray-300"></div>
                <div className="font-semibold text-3xl mb-6 mt-6 mx-10 text-gray-800">Comments</div>
                <div className="mx-10 w-2/3">
                {comments.length>0 ? (
                        comments.map((comment: { content: string, name: string, postedOn: string }, index: number) => (
                    <Comments 
                        key={index} 
                        userName={comment.name}
                        postedOn={Date.now()}
                        commentText={comment.content} 
                    />
                ))
            ) : (
                <div>This post has no comments.</div>
            )}
                </div>
            </div>
        </div>
    );
};

export default SpecificPlant;
