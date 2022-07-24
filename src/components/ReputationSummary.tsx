// import { Link } from 'react-router-dom';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { useUserJobs } from '../hooks';
import useUser from '../hooks/useUser';
import JobCard from './JobCard';

const ReputationSummary = ({ handle }: { handle: string | undefined }) => {
  const user = useUser();
  const userJobs = useUserJobs();

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

      {user && parseInt(user.numReviews, 10) > 0 && (
        <Box
          display='flex'
          flexDirection='row'
          width='100%'
          justifyContent='flex-start'
          alignItems='flex-start'>
          <Card sx={{ minWidth: 120, marginRight: '20px' }}>
            <CardContent>
              <Typography variant='h3' component='h1' letterSpacing={0.5} gutterBottom>
                {user.numReviews}
              </Typography>
              Total Reviews
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 120 }}>
            <CardContent>
              <Typography variant='h3' component='h1' letterSpacing={0.5} gutterBottom>
                {user.rating}
              </Typography>
              Average rating
            </CardContent>
          </Card>
        </Box>
      )}

      <hr />

      <Typography variant='h3' component='h1' letterSpacing={0.5} gutterBottom>
        All my jobs
      </Typography>

      {userJobs.map((job, index) => {
        return <JobCard key={index} job={job} />;
      })}
    </Box>
  );
};

export default ReputationSummary;
