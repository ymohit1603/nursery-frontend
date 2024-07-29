import { Box, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button, Grid } from '@mui/material';
import { useState } from 'react';
import { useAppDispatch } from '../../redux/hook';
import postReview from '../../redux/slices/reviewSlice'; 

export default function Component() {
  const dispatch = useAppDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string; value: string }>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'rating':
        setRating(Number(value));
        break;
      case 'review':
        setReview(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
 
    dispatch(postReview({name,email,password,review}));
    console.log('Form data:',name);
    setName('');
    setEmail('');
    setRating(0);
    setReview('');
  };

  return (
    <div>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 640,
          py: 1.6,
          minHeight: '80%',
          fontFamily: 'Inter, sans-serif',
          mx: 'auto',
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontFamily: 'var(--font-heading)', fontWeight: 'bold' }}
        >
          Write a Review
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 2,
            fontFamily: 'var(--font-body)',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                name="name"
                value={name}
                onChange={handleChange}
                required
                fullWidth
                sx={{ '& .MuiInputBase-input': { fontSize: '0.875rem' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                name="email"
                type="email"
                value={email}
                onChange={handleChange}
                required
                fullWidth
                sx={{ '& .MuiInputBase-input': { fontSize: '0.875rem' } }}
              />
            </Grid>
          </Grid>
          <FormControl fullWidth required>
            <InputLabel id="rating-label">Rating</InputLabel>
            <Select
              labelId="rating-label"
              name="rating"
              value={rating}
              onChange={handleChange}
              id="rating"
              label="Rating"
            >
              <MenuItem value={5}>5 stars</MenuItem>
              <MenuItem value={4}>4 stars</MenuItem>
              <MenuItem value={3}>3 stars</MenuItem>
              <MenuItem value={2}>2 stars</MenuItem>
              <MenuItem value={1}>1 star</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Review"
            name="review"
            multiline
            rows={3}
            value={review}
            onChange={handleChange}
            required
            sx={{ width: '100%' }}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit Review
          </Button>
        </Box>
      </Box>
    </div>
  );
}
