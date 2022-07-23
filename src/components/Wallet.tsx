import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { Box, Tooltip, Typography } from '@mui/material';
import { ConnectWallet } from '.';
import { truncateAddress } from '../utils/index';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useContext } from 'react';
import TalentLayerContext from '../context/talentLayer';

const Wallet = () => {
  const { active, account, error } = useWeb3React<Web3Provider>();
  const { isRegisterToPoh } = useContext(TalentLayerContext);

  return (
    <Box justifyContent='flex-end' flexDirection='row' alignItems='center' display='flex'>
      {active && (
        <Box justifyContent='center' flexDirection='row' alignItems='center' display='flex'>
          {isRegisterToPoh && (
            <Tooltip title="Proof of Humanity Verified">
              <CheckCircleIcon sx={{marginRight: '5px'}}></CheckCircleIcon>
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
