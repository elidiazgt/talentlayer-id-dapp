import { LoadingButton } from '@mui/lab';
import { Alert, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TalentLayerContext from '../context/talentLayer';
import { mint } from '../contracts/utils';

const MintHandle = () => {
  const { signer } = useContext(TalentLayerContext);
  const { isRegisterToPoh } = useContext(TalentLayerContext);
  const [isMinting, setIsMinting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { handle } = useParams<{ handle: string }>();
  const navigate = useNavigate();

  const mintHandle = async () => {
    try {
      if (!handle || !signer) return;

      setIsMinting(true);
      await mint(signer, handle, isRegisterToPoh);
      navigate(`/mint-handle-success/${handle}`);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      setIsMinting(false);
      setError('Impossible to mint');
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
            <LoadingButton
              onClick={mintHandle}
              variant='contained'
              size='large'
              loading={isMinting}>
              {isMinting ? 'Minting...' : 'Mint Your TalentLayer ID'}
            </LoadingButton>
            {error && (
              <Alert severity='error' sx={{ marginTop: '10px' }}>
                {error}
              </Alert>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default MintHandle;
