// import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import {  RecoverComponent } from '../components';

const RecoverId = () => {
  // const { handle } = useParams<{ handle?: string }>();
  return (
    <Box display='flex' justifyContent='flex-start' alignItems='flex-start' width='100%'>
      
      <Box sx={{ width: '75%' }}>
        <RecoverComponent />
      </Box>
    </Box>
  );
};

export default RecoverId;