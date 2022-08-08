// import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import {  RecoverComponent } from '../components';
import {  RecoverComponentNotice } from '../components';
import {  RecoverComponentResult } from '../components';


const RecoverId = () => {
  // const { handle } = useParams<{ handle?: string }>();
  return (
    <Box display='flex' justifyContent='flex-start' alignItems='center' width='100%'>
      
      <Box alignItems='center' sx={{ width: '100%' }}>
        <RecoverComponentResult />
      </Box>
    </Box>
  );
};

export default RecoverId;