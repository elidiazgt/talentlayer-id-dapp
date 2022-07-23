import { Box, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { Wallet } from '.';

const Header = () => {
  return (
    <Box p={5} display='flex' width='100%' alignItems='center' justifyContent='space-between'>
      <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardMedia
          component='img'
          height='40'
          image='/talent-layer-light-40.png'
          title='TalentLayer logo'
        />
      </Link>
      <Wallet />
    </Box>
  );
};

export default Header;
