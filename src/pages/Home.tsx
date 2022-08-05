import { Link } from 'react-router-dom';
import { Box, Button, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useContext } from 'react';
import TalentLayerContext from '../context/talentLayer';

const Home = () => {
  const { talentLayerId, talentLayerHandle } = useContext(TalentLayerContext);
  const isConnected = talentLayerId && talentLayerId !== '0';
  return (
    <Box display='flex' flexDirection='column' width='100%' alignItems='center' padding={10}>
      <Typography variant='h3' component='h1' letterSpacing={0.5} sx={{ pb: 3 }} gutterBottom>
        Own your reputation as an indie freelancer.
      </Typography>
      <Typography sx={{ pt: 1, pb: 2, mx: 3, fontSize: 20 }}>
        Onboard your clients to TalentLayer Indie, leave mutual reviews, and grow your reputation.
      </Typography>
      <Typography sx={{ py: 2, mx: 6, fontSize: 16 }} gutterBottom>
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
        {isConnected ? (
          <Card sx={{ width: '30%', margin: '10px' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <CardMedia
                component='img'
                height='100'
                image='/pexels-daniel-xavier-1239291.jpeg'
                title='Admin Center'
              />
              <Typography sx={{ pt: 2, pb: 1, fontSize: 28 }}>My Jobs &amp; Reputation</Typography>
              <Typography sx={{ pb: 2, fontSize: 14 }}>
                Post and complete jobs as either a client or freelancer and view my reputation.
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
              <CardMedia
                component='img'
                height='100'
                image='/pexels-daniel-xavier-1239291.jpeg'
                title='Create ID'
              />
              <Typography sx={{ pt: 2, pb: 1, fontSize: 28 }}>Create ID</Typography>
              <Typography sx={{ pb: 2, fontSize: 14 }}>
                Get started by creating your TalentLayer ID and verifying with Proof of Humanity.
              </Typography>
              <Button component={Link} to='/proof-of-humanity' variant='outlined' size='large'>
                Create ID
              </Button>
            </CardContent>
          </Card>
        )}
        <Card sx={{ width: '30%', margin: '10px' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <CardMedia
              component='img'
              height='100'
              image='/pexels-ketut-subiyanto-4126739.jpeg'
              title='Search Reputations'
            />
            <Typography sx={{ pt: 2, pb: 1, fontSize: 28 }}>Clients and Freelancers</Typography>
            <Typography sx={{ pb: 2, fontSize: 14 }}>
              View the verified reviews of someone you want to work with.
            </Typography>
            <Button
              component={Link}
              to='/search-reputations-center'
              variant='outlined'
              size='large'>
              Search Reputations
            </Button>
          </CardContent>
        </Card>
        <Card sx={{ width: '30%', margin: '10px' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <CardMedia
              component='img'
              height='100'
              image='/pexels-ralph-chang-794212.jpeg'
              title='Recover ID'
            />
            <Typography sx={{ pt: 2, pb: 1, fontSize: 28 }}>Recover ID</Typography>
            <Typography sx={{ pb: 2, fontSize: 14 }}>
              Recover your TalentLayer ID and associate it with a new address.
            </Typography>
            <Button 
            component={Link}
            to='/recover-id'
            variant='outlined' size='large'>
              Recover my ID
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default Home;
