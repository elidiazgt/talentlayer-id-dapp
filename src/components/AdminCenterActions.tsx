import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const AdminCenterActions = () => {
  return (
    <Box
      pl={4}
      display='flex'
      flexDirection='column'
      width='100%'
      alignItems='flex-start'
      justifyContent='flex-start'>
      <Button component={Link} to='/create-job' variant='outlined' size='large' sx={{ my: 1 }}>
        Create a Job
      </Button>
    </Box>
  );
};

export default AdminCenterActions;
