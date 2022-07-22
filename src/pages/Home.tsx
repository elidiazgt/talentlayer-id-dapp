import { Link } from 'react-router-dom';
import { Box, Button, Grid, Card, CardContent, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box display='flex' flexDirection='column' width='100%' alignItems='center' padding={10}>
      <Typography variant='h3' component='h1' letterSpacing={0.5} sx={{ p: 3 }} gutterBottom>
        Independent Freelancer Reputation Tool
      </Typography>
      <Typography sx={{ py: 2, mx: 3, fontSize: 20 }}>
        TalentLayer is a decentralized, self-owned freelancer reputation system. Own your reputation
        and leverage it across many freelancing marketplaces.
      </Typography>
      <Typography sx={{ py: 2, mx: 3, fontSize: 20 }}>
        The Indie Freelancer Reputation Tool allows independent freelancers and their clients to
        write mutual reviews for one another, indepdent of any freelance marketplace.
      </Typography>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        style={{ minHeight: '30vh' }}>
        <Card sx={{ width: '30%', margin: '10px' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography sx={{ py: 3, mx: 3, fontSize: 18 }}>
              Verify your ID and write a review for someone you&apos;ve worked with.
            </Typography>
            <Button component={Link} to='/proof-of-humanity' variant='contained' size='large'>
              Verify ID &amp; Write Review
            </Button>{' '}
          </CardContent>
        </Card>
        <Card sx={{ width: '30%', margin: '10px' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            {' '}
            <Typography sx={{ py: 3, mx: 3, fontSize: 18 }}>
              View the verified reviews of someone you want to work with.{' '}
            </Typography>
            <Button variant='contained' size='large'>
              Search Reputations
            </Button>
          </CardContent>
        </Card>
        <Card sx={{ width: '30%', margin: '10px' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography sx={{ py: 3, mx: 3, fontSize: 18 }}>
              Lose your wallet? Recover your TalentLayer ID into a new wallet.{' '}
            </Typography>
            <Button variant='contained' size='large'>
              Recover my ID
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default Home;
