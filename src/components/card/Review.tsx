import { Box, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button, Grid, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { useAppDispatch } from '../../redux/hook';
import { postReview } from '../../redux/slices/reviewSlice';

export default function Component({productId}:{productId:number} ) {
  const dispatch = useAppDispatch();

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    rating: 0,
    review: ''
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (event: SelectChangeEvent<number>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value as number,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, email, rating, review } = formState;

    dispatch(postReview({ name, email, rating, review ,productId}));
    console.log('Form data:', formState);
    setFormState({
      name: '',
      email: '',
      rating: 0,
      review: ''
    });
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
                value={formState.name}
                onChange={handleInputChange}
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
                value={formState.email}
                onChange={handleInputChange}
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
              value={formState.rating}
              onChange={handleSelectChange}
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
            value={formState.review}
            onChange={handleInputChange}
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