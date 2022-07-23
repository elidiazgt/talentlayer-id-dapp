import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { AdminCenterActions, ReputationSummary } from '../components';

const AdminCenter = () => {
  const { handle } = useParams<{ handle?: string }>();
  return (
    <Box display='flex' justifyContent='flex-start' alignItems='flex-start' width='100%'>
      <Box sx={{ width: '25%' }}>
        <AdminCenterActions />
      </Box>
      <Box sx={{ width: '75%' }}>
        <ReputationSummary handle={handle} />
      </Box>
    </Box>
  );
};

export default AdminCenter;
