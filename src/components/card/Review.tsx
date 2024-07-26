import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

export default function Component() {
  return (
    <Box
    sx={{
      maxWidth: 600,
      ml: 32,
      py: 2,
      fontFamily: 'Inter, sans-serif', // Apply the font to the whole box
    }}
  >
    <Typography
      variant="h4"
      gutterBottom
      sx={{ fontFamily: 'var(--font-heading)', fontWeight: 'bold' }} // Heading font
    >
      Write a Review
    </Typography>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 2,
        fontFamily: 'var(--font-body)', // Body font
      }}
    >
      <TextField
        label="Name"
        id="name"
        required
        sx={{ width: '100%', '& .MuiInputBase-input': { fontSize: '0.875rem' } }}
      />
      <TextField
        label="Email"
        id="email"
        type="email"
        required
        sx={{ width: '100%', '& .MuiInputBase-input': { fontSize: '0.875rem' } }}
      />
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
        rows={4}
        required
        sx={{ width: '100%' }}
      />
      <Button variant="contained" color="primary">
        Submit Review
      </Button>
    </Box>
  </Box>
  );
}