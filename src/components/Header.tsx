import { Box, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { Wallet } from '.';

const Header = () => {
  return (
    <Box mt={2} display='flex' width='100%' alignItems='center' justifyContent='space-between'>
      <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
        <Box display='flex' alignItems='center'>
          <CardMedia
            component='img'
            height='50'
            image='talent-layer-light-50.png'
            title='TalentLayer logo'
          />
        </Box>
      </Link>
      <Box display='flex' alignItems='center' justifyContent='flex-end'>
        <Wallet />
      </Box>
    </Box>
  );
};

export default Header;
