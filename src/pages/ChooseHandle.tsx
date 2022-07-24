import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
import { ChooseHandleForm } from '../components';

const ChooseHandle = () => {
  return (
    <Box display='flex' flexDirection='column' width='100%' alignItems='center' padding={10}>
      <Typography variant='h3' component='h1' letterSpacing={0.5} sx={{ p: 3 }} gutterBottom>
        Choose Your TalentLayer ID Handle
      </Typography>
      <Typography sx={{ py: 2, mx: 3, fontSize: 20 }}>
        Your TalentLayer ID Handle is a unique identifier that is the core of your TalentLayer ID.
        It is a way for people to search and find your reputation.
      </Typography>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        style={{ minHeight: '30vh' }}>
        <Card sx={{ width: '40%', margin: '10px' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <ChooseHandleForm />
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default ChooseHandle;
