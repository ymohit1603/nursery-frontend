
import { Avatar, Typography, Box, Container, Paper, Grid } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

interface reviewTypes {
  name: string,
  email: string,
  rating: number,
  reviewText:string
}


function CustomerReviews({reviews}:{reviews:reviewTypes[]}) {
  return (
      
    <Paper className="w-full min-w-3xl pb-8 bg-white rounded-lg shadow-sm overflow-auto ">
      <Container className="px-6 py-3">
        <Typography variant="h4" className=" font-extrabold pb-6">Customer Reviews</Typography>
        <Box className="max-h-2xl overflow-hidden">
          <Grid container direction="column" spacing={6}>
            {reviews.map((review, index) => (
              <Grid item key={index} className="flex items-start gap-4">
                <Avatar alt={review.name} />
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
                    {review.reviewText}
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
