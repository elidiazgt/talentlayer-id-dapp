import { useParams } from 'react-router-dom';
import { Button, Box, Grid, Card, CardContent, Typography } from '@mui/material';

const MintHandleSuccess = () => {
  const { handle } = useParams<{ handle?: string }>();
  // eslint-disable-next-line no-console
  console.log('MintHandleSuccess', { handle });
  return (
    <Box display='flex' flexDirection='column' width='100%' alignItems='center' padding={10}>
      <Typography variant='h3' component='h1' letterSpacing={0.5} sx={{ p: 3 }} gutterBottom>
        Success!
      </Typography>
      <Typography sx={{ py: 2, mx: 3, fontSize: 20 }}>
        Your TalentLayer ID <strong>{handle}</strong> has been minted.
      </Typography>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        style={{ minHeight: '30vh' }}>
        <Card sx={{ width: '30%', margin: '10px' }}>
          <CardContent sx={{ textAlign: 'center', minHeight: '15vh', pt: '5vh' }}>
            <Button variant='contained' size='large'>
              Leave a Review
            </Button>
          </CardContent>
        </Card>
        <Card sx={{ width: '30%', margin: '10px' }}>
          <CardContent sx={{ textAlign: 'center', minHeight: '15vh', pt: '5vh' }}>
            <Button variant='contained' size='large'>
              View My talentLayer Reputation
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default MintHandleSuccess;
