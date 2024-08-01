
import { Avatar, Typography, Box, Container, Paper, Grid } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';

interface reviewTypes {
  name: string,
  email: string,
  rating: number,
  reviewText:string
}


function CustomerReviews({ reviews }: { reviews: reviewTypes[] }) {
  
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageClick = ({ selected }:{selected:number}) => {
    setCurrentPage(selected);
  };
  const items = reviews;
  const itemsPerPage = 3;
  const offset = currentPage * itemsPerPage;
  const currentItems = items.slice(offset, offset + itemsPerPage);
  
  return (
      
    <Paper className="w-full min-w-3xl pb-8 bg-white rounded-lg shadow-sm overflow-auto ">
      <Container className="px-6 py-3">
        <Typography variant="h4" className=" font-extrabold pb-6">Customer Reviews</Typography>
        <Box className="max-h-2xl overflow-hidden " style={{ minHeight: '300px' }}>
          <Grid container direction="column" spacing={6}>
            {currentItems.map((review, index) => (
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
                  <Typography className="text-sm leading-loose text-muted-foreground break-words" variant="body2">
                    {review.reviewText}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <ReactPaginate
          previousLabel={'«'}
          nextLabel={'»'}
          breakLabel={'...'}
          pageCount={Math.ceil(items.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination flex justify-center mt-4'}
          activeClassName={'bg-blue-600 text-white border-blue-600'}
          previousClassName={'font-bold px-3 py-1 border border-gray-300 rounded transition-all hover:bg-gray-200'}
          nextClassName={'font-bold px-3 py-1 border border-gray-300 rounded transition-all hover:bg-gray-200'}
          disabledClassName={'cursor-not-allowed text-gray-400'}
          pageClassName={'cursor-pointer px-3 py-1 border border-gray-300 rounded transition-all hover:bg-gray-200'}
          breakClassName={'cursor-pointer px-3 py-1 border border-gray-300 rounded transition-all hover:bg-gray-200'}
        />
      </Container>
    </Paper>

  );
}

export default CustomerReviews;
