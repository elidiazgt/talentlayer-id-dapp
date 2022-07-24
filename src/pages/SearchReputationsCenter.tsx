// import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { SearchReputationsActions, SearchReputations } from '../components';

const SearchReputationsCenter = () => {
  // const { handle } = useParams<{ handle?: string }>();
  return (
    <Box display='flex' justifyContent='flex-start' alignItems='flex-start' width='100%'>
      <Box sx={{ width: '25%' }}>
        <SearchReputationsActions />
      </Box>
      <Box sx={{ width: '75%' }}>
        <SearchReputations />
      </Box>
    </Box>
  );
};

export default SearchReputationsCenter;
