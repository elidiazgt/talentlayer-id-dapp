import { useParams } from 'react-router-dom';
import { Button, Box, Grid, Card, CardContent, Typography } from '@mui/material';

const MintHandle = () => {
  const { handle } = useParams<{ handle?: string }>();
  const mintHandle = () => {
    try {
      // eslint-disable-next-line no-console
      console.log('async function mint handle:', handle);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };
  return (
    <Box display='flex' flexDirection='column' width='100%' alignItems='center' padding={10}>
      <Typography variant='h3' component='h1' letterSpacing={0.5} sx={{ p: 3 }} gutterBottom>
        Confirm Before Minting
      </Typography>
      <Typography sx={{ py: 2, mx: 3, fontSize: 20 }}>
        The following handle will be associated with your TalentLayer ID. Does this look right?
      </Typography>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        style={{ minHeight: '30vh' }}>
        <Card sx={{ width: '30%', margin: '10px' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography sx={{ py: 3, mx: 3, fontSize: 30 }}>{handle}</Typography>
            <Button onClick={mintHandle} variant='contained' size='large'>
              Mint Handle
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default MintHandle;
