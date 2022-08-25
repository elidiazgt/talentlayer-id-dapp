// import { useParams } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import { useContext } from 'react';
import { RecoverComponent } from '../components';
const RecoverId = () => {
  return (
    <Box display='flex' justifyContent='flex-start' alignItems='center' width='100%'>
      <Box alignItems='center' sx={{ width: '100%' }}>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        style={{ minHeight: '30vh' }}>
          <div style={{border: '1px color red'}} >
           <RecoverComponent />
          </div>
      </Grid>
      </Box> 
    </Box>
  );
};
export default RecoverId;