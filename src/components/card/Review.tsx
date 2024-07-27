
import { Box, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button, Grid } from '@mui/material';

export default function Component() {
  return (
    <div >
      <Box
        sx={{
          maxWidth: 640,
          py: 1.6, 
          minHeight: '80%',
          fontFamily: 'Inter, sans-serif',
          // mx: 'auto', 
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
                id="name"
                required
                fullWidth
                sx={{ '& .MuiInputBase-input': { fontSize: '0.875rem' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                id="email"
                type="email"
                required
                fullWidth
                sx={{ '& .MuiInputBase-input': { fontSize: '0.875rem' } }}
              />
            </Grid>
          </Grid>
          <FormControl fullWidth required>
            <InputLabel id="rating-label">Rating</InputLabel>
            <Select labelId="rating-label" id="rating" defaultValue="" label="Rating">
              <MenuItem value={5}>5 stars</MenuItem>
              <MenuItem value={4}>4 stars</MenuItem>
              <MenuItem value={3}>3 stars</MenuItem>
              <MenuItem value={2}>2 stars</MenuItem>
              <MenuItem value={1}>1 star</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Review"
            id="review"
            multiline
            rows={3}
            required
            sx={{ width: '100%' }}
          />
          <Button variant="contained" color="primary">
            Submit Review
          </Button>
        </Box>
      </Box>
    </div>
  );
}
