import { Link } from 'react-router-dom';
import { Box, Button, Grid, Card, CardContent, Typography } from '@mui/material';
import { useContext } from 'react';
import TalentLayerContext from '../context/talentLayer';

const ProofOfHumanityCheck = () => {
  const { isRegisterToPoh } = useContext(TalentLayerContext);
  if (isRegisterToPoh == null) {
    return null;
  }

  return (
    <Box display='flex' flexDirection='column' width='100%' alignItems='center' padding={10}>
      <Typography variant='h3' component='h1' letterSpacing={0.5} sx={{ p: 3 }} gutterBottom>
        Proof of Humanity
      </Typography>
      <Typography sx={{ py: 2, mx: 3, fontSize: 20 }}>
        {isRegisterToPoh
          ? 'Congrats, your wallet is well registered with Proof of Humanity!'
          : 'You don&apos;t seem to have a Proof of Humanity ID associated with your wallet.'}
      </Typography>
      {isRegisterToPoh && (
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
          style={{ minHeight: '30vh' }}>
          <Card sx={{ margin: '10px' }}>
            <CardContent sx={{ textAlign: 'center', minHeight: '15vh', pt: '5vh' }}>
              <Button component={Link} to='/choose-handle' variant='contained' size='large'>
                Create your profile
              </Button>
            </CardContent>
          </Card>
        </Grid>
      )}

      {!isRegisterToPoh && (
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
          style={{ minHeight: '30vh' }}>
          <Card sx={{ width: '30%', margin: '10px' }}>
            <CardContent sx={{ textAlign: 'center', minHeight: '15vh', pt: '5vh' }}>
              <Button
                component='a'
                target='_blank'
                href='https://app.proofofhumanity.id'
                variant='contained'
                size='large'>
                Create a POH ID
              </Button>
            </CardContent>
          </Card>
          <Card sx={{ width: '30%', margin: '10px' }}>
            <CardContent sx={{ textAlign: 'center', minHeight: '15vh', pt: '5vh' }}>
              <Button variant='contained' size='large'>
                Check Again
              </Button>
            </CardContent>
          </Card>
          <Card sx={{ width: '30%', margin: '10px' }}>
            <CardContent sx={{ textAlign: 'center', minHeight: '15vh', pt: '5vh' }}>
              <Button variant='contained' size='large'>
                Progress with No POH ID
              </Button>
            </CardContent>
          </Card>
        </Grid>
      )}
    </Box>
  );
};

export default ProofOfHumanityCheck;
