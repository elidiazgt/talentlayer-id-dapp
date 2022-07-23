import { Link } from 'react-router-dom';
import { Box, Button, Grid, Card, CardContent, Typography } from '@mui/material';

const ProofOfHumanity = () => {
  return (
    <Box display='flex' flexDirection='column' width='100%' alignItems='center' padding={10}>
      <Typography variant='h3' component='h1' letterSpacing={0.5} sx={{ p: 3 }} gutterBottom>
        Proof of Humanity Verification
      </Typography>
      <Typography sx={{ py: 2, mx: 3, fontSize: 20 }}>
        Proof of Humanity is a decentralized identity system that proves your human-hood.
      </Typography>
      <Typography sx={{ py: 2, mx: 3, fontSize: 20 }}>
        Do you want to associate a POH ID with your TalentLayer ID?
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
              Users with Proof of Humanity verification are more trusted by job creators and are
              able to perform expedited account recoveries.
            </Typography>
            <Button component={Link} to='/proof-of-humanity-check' variant='contained' size='large'>
              Verify my ID
            </Button>
          </CardContent>
        </Card>
        <Card sx={{ width: '30%', margin: '10px' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography sx={{ py: 3, mx: 3, fontSize: 18 }}>
              Users without Proof of Humanity verification are able to participate in all aspects of
              TalentLayer except for expedited account recoveries.
            </Typography>
            <Button component={Link} to='/choose-handle' variant='contained' size='large'>
              Skip Verification
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default ProofOfHumanity;
