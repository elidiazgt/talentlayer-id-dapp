// import { useParams } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import { RecoverComponent } from '../components';
import { RecoverComponentNotice } from '../components';
import { RecoverComponentResult } from '../components';
import { useContext } from 'react';
import TalentLayerContext from '../context/talentLayer';

const { talentLayerId, talentLayerHandle } = useContext(TalentLayerContext);


const RecoverId = () => {
  // const { handle } = useParams<{ handle?: string }>();
  const isConnected = talentLayerId && talentLayerId !== '0';
  let steps = 0;
  return (
    <Box display='flex' justifyContent='flex-start' alignItems='center' width='100%'>

      <Box alignItems='center' sx={{ width: '100%' }}>

      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        style={{ minHeight: '30vh' }}>
        {isConnected ? (
          <div>
            <RecoverComponent />
          {/* <RecoverComponentNotice />
          <RecoverComponentResult /> */}
          </div>
    
      ):(<div></div>)}
      </Grid>
      </Box>
    </Box>
  );
};

export default RecoverId;