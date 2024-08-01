import { Box, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button, Grid, SelectChangeEvent, Alert } from '@mui/material';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { postReview } from '../../redux/slices/reviewSlice';

export default function Component({productId}:{productId:number} ) {
  const dispatch = useAppDispatch();
  const reviewStatus = useAppSelector(state => state.review.postStatus);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    rating: 5,
    reviewText: ''
  });

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (reviewStatus === 'succeeded') {
      setShowAlert(true);
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000); 

      return () => clearTimeout(timer);
    }
  }, [reviewStatus]);


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
    const { name, email, rating, reviewText } = formState;

    dispatch(postReview({ name, email, rating, reviewText ,productId}));
    console.log('Form data:', formState);
    setFormState({
      name: '',
      email: '',
      rating: 5,
      reviewText: ''
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
            name="reviewText"
            multiline
            rows={3}
            value={formState.reviewText}
            onChange={handleInputChange}
            required
            sx={{ width: '100%' }}
          />
          <div className="flex flex-row" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Button type="submit" variant="contained" color="primary">
              Submit Review
            </Button>
            {showAlert && (
              <Alert severity="success" sx={{ display: 'inline-flex', alignItems: 'center' }}>
                Review Added
              </Alert>
            )}
          </div>
        </Box>
      </Box>
    </div>
  );
}