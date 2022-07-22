import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { Box, Typography } from '@mui/material';
import { ConnectWallet } from '.';

const Wallet = () => {
  const { active, account, error } = useWeb3React<Web3Provider>();
  return (
    <Box mt={1} justifyContent='flex-end' flexDirection='row' alignItems='center' display='flex'>
      {active && (
        <Typography variant='subtitle2' component='h5'>
          {account}
        </Typography>
      )}
      {error && (
        <Typography variant='subtitle2' component='h5'>
          error: {error.message}
        </Typography>
      )}
      <ConnectWallet />
    </Box>
  );
};

export default Wallet;
