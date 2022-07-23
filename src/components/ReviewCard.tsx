import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Review } from '../types';

interface IProps {
  review: Review;
}

const ReviewCard = ({ review }: IProps) => {
  return (
    <Card sx={{ minWidth: 275, marginBottom: '20px' }}>
      <CardContent>
        <Typography variant='body2'>
          #{review.id} to {review.to.handle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
