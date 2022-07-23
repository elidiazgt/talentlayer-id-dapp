import { LoadingButton } from '@mui/lab';
import { Alert, Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import TalentLayerContext from '../context/talentLayer';
import { addReview } from '../contracts/utils';

const AddReview = () => {
  const { signer } = useContext(TalentLayerContext);
  const { jobId } = useParams<{ jobId: string }>();
  const [isMinting, setIsMinting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddReview = async () => {
    try {
      if (!jobId || !signer) return;

      setIsMinting(true);
      await addReview(signer, jobId, 'tempURI');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      setIsMinting(false);
      setError('Impossible to mint the review');
    }
  };

  return (
    <Box display='flex' flexDirection='column' width='100%' alignItems='center' padding={10}>
      <Typography variant='h3' component='h1' letterSpacing={0.5} sx={{ p: 3 }} gutterBottom>
        AddReview
      </Typography>
      <Typography sx={{ py: 2, mx: 3, fontSize: 20 }}>About Job:</Typography>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        style={{ minHeight: '30vh' }}>
        <Card sx={{ width: '30%', margin: '10px' }}>
          <CardContent sx={{ textAlign: 'center' }}>FORM HERE</CardContent>
          <LoadingButton
            onClick={handleAddReview}
            variant='contained'
            size='large'
            loading={isMinting}>
            {isMinting ? 'Minting...' : 'Validate review'}
          </LoadingButton>
          {error && (
            <Alert severity='error' sx={{ marginTop: '10px' }}>
              {error}
            </Alert>
          )}
        </Card>
      </Grid>
    </Box>
  );
};

export default AddReview;
