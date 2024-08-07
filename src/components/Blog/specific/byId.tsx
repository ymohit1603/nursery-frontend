import { Alert, Container, Typography, Card, CardContent, CircularProgress, Box, Avatar, Grid } from "@mui/material";
import { useBlogById } from "../../../hooks/useBlogById";
// import { useAppDispatch } from "../../../redux/hook";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AddComment from "../../card/addComment";
// import BookmarkIcon from '@mui/icons-material/Bookmark';

// const IntroData = {
//     title: "Introducing the Majestic Monstera",
//     description: "Discover the captivating beauty and unique features of this iconic houseplant."
// };

const SpecificPlant = ({ endpoints }: { endpoints: string }) => {
    const { blog, loading, error } = useBlogById({ endpoints });
  
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
            <div className="flex justify-start w-1/2 mx-10"><AddComment/></div>
            </div>
        </div>
    );
};

export default SpecificPlant;
