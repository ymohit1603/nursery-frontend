
import { Avatar, Typography, Box, Container, Paper, Grid } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';


const reviews = [
  {
    name: 'Sarah Johnson',
    image: '/placeholder-user.jpg',
    rating: 3,
    text: "I've been experimenting with my LuminaCook Multi-Function Air Fryer for a few weeks now, and it's been a versatile addition to my kitchen. It's great for making crispy fries, chicken wings, and even some healthier options.",
  },
  {
    name: 'Alex Smith',
    image: '/placeholder-user.jpg',
    rating: 3,
    text: "I recently purchased the SparkleShine Home Cleaning Robot, and it has been a game-changer in my life. I used to spend hours every weekend cleaning my house, but now I can simply turn on this little robot and let it do the work. It's incredibly efficient, navigating around obstacles with ease. The only reason I didn't give it a perfect 5-star rating is that it occasionally gets stuck under low furniture. Overall, it's been a great addition to my home, saving me time and effort.",
  },
  {
    name: 'Emily Parker',
    image: '/placeholder-user.jpg',
    rating: 2,
    text: "The battery life is impressive, lasting me for long-haul flights without any issues. They are comfortable to wear for extended periods, and I appreciate the sleek design. Worth every penny, and I'd recommend these headphones to anyone who values high-quality audio and peace and quiet.",
  },
];

function CustomerReviews() {
  return (
      
    <Paper className="w-full max-w-3xl min-h-screen bg-white rounded-lg shadow-sm overflow-auto ">
      <Container className="px-6 py-3">
        <Typography variant="h3" className="text-lg font-extrabold pb-6">Customer Reviews</Typography>
        <Box className="max-h-2xl overflow-hidden">
          <Grid container direction="column" spacing={6}>
            {reviews.map((review, index) => (
              <Grid item key={index} className="flex items-start gap-4">
                <Avatar alt={review.name} src={review.image} />
                <Box>
                  <Box className="flex items-center gap-2">
                    <Typography variant="h6" className="font-semibold">{review.name}</Typography>
                    <Box className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? 'text-primary' : 'text-muted'}`}
                        />
                      ))}
                    </Box>
                  </Box>
                  <Typography className="text-sm leading-loose text-muted-foreground" variant="body2">
                    {review.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Paper>

  );
}

export default CustomerReviews;
