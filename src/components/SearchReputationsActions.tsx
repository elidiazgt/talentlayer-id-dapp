// import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';

const SearchReputationsActions = () => {
  return (
    <Box
      pl={4}
      display='flex'
      flexDirection='column'
      width='100%'
      alignItems='flex-start'
      justifyContent='flex-start'>
      <Button variant='outlined' size='large' sx={{ my: 1 }}>
        Search Reputations
      </Button>
    </Box>
  );
};

export default SearchReputationsActions;
