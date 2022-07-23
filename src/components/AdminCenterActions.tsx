import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import postToIpfs from '../services/ipfs';

const AdminCenterActions = () => {
  const handleClick = async () => {
    console.log('click');
    const hash = await postToIpfs('foo');
    console.log('hash', hash);
  };
  return (
    <Box
      pl={4}
      display='flex'
      flexDirection='column'
      width='100%'
      alignItems='flex-start'
      justifyContent='flex-start'>
      <Typography variant='h4' component='h4' sx={{ p: 1 }} gutterBottom>
        Admin Center
      </Typography>

      <Typography variant='h5' component='h5' sx={{ p: 1, mt: 2 }}>
        Reviews
      </Typography>

      <Button onClick={handleClick} variant='contained' size='large' sx={{ my: 1 }}>
        View Pending Reviews
      </Button>

      <Typography variant='h5' component='h5' sx={{ p: 1, mt: 2 }}>
        Jobs
      </Typography>
      <Button component={Link} to='/create-job' variant='contained' size='large' sx={{ my: 1 }}>
        Create a Job
      </Button>
      <Button variant='contained' size='large' sx={{ my: 1 }}>
        View Pending Jobs
      </Button>

      <Typography variant='h5' component='h5' sx={{ p: 1, mt: 2 }}>
        Reputation
      </Typography>
      <Button variant='contained' size='large' sx={{ my: 1 }}>
        My Reputation
      </Button>
    </Box>
  );
};

export default AdminCenterActions;
