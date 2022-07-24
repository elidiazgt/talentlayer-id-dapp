import { Box, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { Wallet } from '.';

const Header = () => {
  return (
    <Box p={5} display='flex' width='100%' alignItems='center' justifyContent='space-between'>
      <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardMedia component='img' height='35' image='/logo.svg' title='TalentLayer logo' />
      </Link>
      <Wallet />
    </Box>
  );
};

export default Header;
