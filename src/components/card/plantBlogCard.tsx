
import { Box, Typography, Divider, Card, CardMedia } from '@mui/material';
import { CalendarToday, Person } from '@mui/icons-material';

export default function Component() {
  return (
    <Card sx={{ display: 'flex', maxWidth: '600px', gap: 2, p: 2 }}>
      <CardMedia
        component="img"
        src="/placeholder.svg"
        alt="Blog Post Image"
        sx={{
          width: 300,
          height: 300,
          transition: 'transform 0.3s',
          '&:hover': { transform: 'scale(1.05)' }
        }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h5" component="h3" fontWeight="bold">
            Exploring the Wonders of Nature
          </Typography>
          <Typography color="text.secondary">
            Discover the beauty and serenity of the great outdoors in this captivating blog post.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Person fontSize="small" />
            <Typography variant="body2">John Doe</Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CalendarToday fontSize="small" />
            <Typography variant="body2">June 27, 2024</Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
