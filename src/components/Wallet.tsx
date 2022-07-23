import { Web3Provider } from '@ethersproject/providers';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Tooltip, Typography } from '@mui/material';
import { useWeb3React } from '@web3-react/core';
import { useContext } from 'react';
import { ConnectWallet } from '.';
import TalentLayerContext from '../context/talentLayer';
import { truncateAddress } from '../utils/index';

const Wallet = () => {
  const { active, account, error } = useWeb3React<Web3Provider>();
  const { isRegisterToPoh } = useContext(TalentLayerContext);

  return (
    <Box justifyContent='flex-end' flexDirection='row' alignItems='center' display='flex'>
      {active && (
        <Box justifyContent='center' flexDirection='row' alignItems='center' display='flex'>
          {isRegisterToPoh && (
            <Tooltip title='Proof of Humanity Verified'>
              <CheckCircleIcon sx={{ marginRight: '5px' }} />
            </Tooltip>
          )}
          <Typography variant='subtitle2' component='h5'>
            {truncateAddress(account ?? '')}
          </Typography>
        </Box>
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
