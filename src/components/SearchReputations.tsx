import { Box, Typography } from '@mui/material';
import { useReviews } from '../hooks';
import ReviewCard from './ReviewCard';

const SearchReputations = () => {
  const { reviews } = useReviews();

  return (
    <Box
      display='flex'
      flexDirection='column'
      width='100%'
      justifyContent='flex-start'
      alignItems='flex-start'>
      <Typography variant='h3' component='h1' letterSpacing={0.5} gutterBottom>
        Clients &amp; Freelancers
      </Typography>

      <Typography variant='h3' component='h1' letterSpacing={0.5} gutterBottom>
        All reviews
      </Typography>

      {reviews.map((review, index) => {
        return <ReviewCard key={index} review={review} />;
      })}
    </Box>
  );
};

export default SearchReputations;
