import { Box, Typography, Card, CardMedia, Button } from '@mui/material';
import { Link,useLocation } from 'react-router-dom'; 

interface ComponentTypes {
  imgUrl: string;
  Title: string;
  Description: string;
  link: string; 
}

export default function Component({ imgUrl, Title, Description, link }: ComponentTypes) {
  const location = useLocation();

  const fullPath = `${location.pathname}${link}`;
  return (
    <div className="">
      <Link to={fullPath} style={{ textDecoration: 'none' }}>
        <Card sx={{ m: 4, display: 'flex', maxHeight: '300px', maxWidth: '700px', gap: 2, p: 2, cursor: 'pointer' }}>
          <CardMedia
            component="img"
            src={imgUrl}
            alt="Blog Post Image"
            sx={{
              width: 300,
              height: 300,
              transition: 'transform 0.3s',
              '&:hover': { transform: 'scale(1.05)' }
            }}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h5" component="h3" fontWeight="bold">
                {Title}
              </Typography>
              <Typography color="text.secondary">
                {Description}
              </Typography>
            </Box>
            <Box sx={{ mt: 'auto' }}> 
              <Button variant="contained" color="primary" component={Link} to={fullPath}>
                Read More
              </Button>
            </Box>
          </Box>
        </Card>
      </Link>
    </div>
  );
}