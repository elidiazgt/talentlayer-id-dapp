import { Link } from 'react-router-dom';
import { Box, Button, Grid, Card, CardContent, Typography } from '@mui/material';
import { useContext } from 'react';
import TalentLayerContext from '../context/talentLayer';

const Home = () => {
  const { talentLayerId, talentLayerHandle } = useContext(TalentLayerContext);

  return (
    <Box display='flex' flexDirection='column' width='100%' alignItems='center' padding={10}>
      <Typography variant='h3' component='h1' letterSpacing={0.5} sx={{ p: 3 }} gutterBottom>
        TalentLayer Indie
      </Typography>
      <Typography sx={{ py: 2, mx: 3, fontSize: 20 }}>
        Onboard your clients to TalentLayer Indie, leave mutual reviews, and grow your reputation.
      </Typography>
      <Typography sx={{ py: 2, mx: 3, fontSize: 20 }}>
        TalentLayer Indie is a reputation tool for independent freelancers. Similar to how you can
        build up a reputation over time by completing work and receiving reviews on freelancing
        platforms like Upwork or Freelancer.com, now you and your independent clients can create
        verified reviews to signal your trustworthiness with prospective clients.
      </Typography>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        style={{ minHeight: '30vh' }}>
        {talentLayerId !== '0' ? (
          <Card sx={{ width: '30%', margin: '10px' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography sx={{ py: 3, mx: 3, fontSize: 18 }}>
                Write a review, create a job and view your reputation.
              </Typography>
              <Button
                component={Link}
                to={`/admin-center/${talentLayerHandle}`}
                variant='outlined'
                size='large'>
                Access Admin Center
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card sx={{ width: '30%', margin: '10px' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography sx={{ py: 3, mx: 3, fontSize: 18 }}>
                Get started by creating your TalentLayer ID.
              </Typography>
              <Button component={Link} to='/proof-of-humanity' variant='outlined' size='large'>
                Create ID
              </Button>
            </CardContent>
          </Card>
        )}
        <Card sx={{ width: '30%', margin: '10px' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography sx={{ py: 3, mx: 3, fontSize: 18 }}>
              View the verified reviews of someone you want to work with.
            </Typography>
            <Button variant='outlined' size='large'>
              Search Reputations
            </Button>
          </CardContent>
        </Card>
        <Card sx={{ width: '30%', margin: '10px' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography sx={{ py: 3, mx: 3, fontSize: 18 }}>
              Lose your wallet? Recover your TalentLayer ID into a new wallet.{' '}
            </Typography>
            <Button variant='outlined' size='large'>
              Recover my ID
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default Home;
