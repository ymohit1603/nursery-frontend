import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton, } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hook';
import { decrement, increase } from '../../redux/slices/blogSlice';


interface cardTypes{
  id:number,
  imgUrl: string,
  Name: string,
  title:string,
  Description:string
}

export default function BlogCard({id, imgUrl, title, Description }: cardTypes) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLike = () => {
    if (liked) {
      dispatch(decrement());
    }
    else {
      dispatch(increase());
    }
    setLiked(!liked);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  const handleCardClick = () => {
    navigate(`${id}`);
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <div onClick={handleCardClick}>
        <CardActionArea>
          <CardMedia
            className='bg-gray-400 h-48'
            component="img"
            image={imgUrl}
            alt={`${title} image`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {Description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </div>
        <CardActions>
        <Button onClick={handleCardClick} size="small" color="primary">
          Read more
        </Button>
        <div style={{ marginLeft: 'auto' }}>
            <IconButton onClick={handleLike}>{liked ? <FavoriteIcon color="secondary" /> : <FavoriteBorderIcon />}</IconButton>        
            <IconButton onClick={handleBookmark}>{bookmarked ? <BookmarkIcon color="secondary" /> : <BookmarkBorderIcon />}</IconButton>
        </div>
      </CardActions>
    </Card>
  );
}