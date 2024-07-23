import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


interface cardTypes{
  imgUrl: string,
  Name: string,
  title:string,
  Description:string
}


export default function BlogCard({imgUrl,title,Description }:cardTypes) {
  return (
    <Card sx={{ maxWidth: 345 }}>
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
      <CardActions>
        <Button size="small" color="primary">
          Read more
        </Button>
      </CardActions>
    </Card>
  );
}