import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import useReviewDetails from '../hooks/useReviewDetails';
import { Review } from '../types';

interface IProps {
  review: Review;
}

const ReviewCard = ({ review }: IProps) => {
  const reviewDetails = useReviewDetails(review.uri);

  return (
    <Card sx={{ minWidth: 275, marginBottom: '20px' }}>
      <CardContent>
        <Typography variant='body2'>
          Review #{review.id} to {review.to.handle}
        </Typography>
        <Typography variant='body2'>Content: {reviewDetails?.content ?? '-'}</Typography>
        <Typography variant='body2'>Rating: {reviewDetails?.rating ?? '-'}</Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
