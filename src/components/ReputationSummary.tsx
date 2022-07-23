// import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const ReputationSummary = ({ handle }: { handle: string | undefined }) => {
  // TODO add jobs
  return (
    <Box
      display='flex'
      flexDirection='column'
      width='100%'
      justifyContent='flex-start'
      alignItems='flex-start'>
      <Typography variant='h3' component='h1' letterSpacing={0.5} gutterBottom>
        Reputation Summary @{handle}
      </Typography>

      <Typography sx={{ py: 2, mr: 3, fontSize: 20 }}>
        Your reputation is updated whenever someone you&apos;ve worked with leaves you a review!
        Explore your reputation summary below.
      </Typography>
    </Box>
  );
};

export default ReputationSummary;
