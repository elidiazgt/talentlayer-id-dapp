import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { Box, Button } from '@mui/material';

import { useEagerConnect, useInactiveListener } from '../hooks';
// eslint-disable-next-line import/no-named-as-default
import connectorList from '../lib/connectors';

type ConnectorName = 'MetaMask' | 'Portis';

const ConnectWallet = () => {
  const [isConnecing, setIsConnecing] = useState(false);
  const { activate, deactivate, active, error } = useWeb3React<Web3Provider>();

  const triedEager = useEagerConnect();

  useInactiveListener(!triedEager);

  const handleClick = (connectorName: ConnectorName) => () => {
    setIsConnecing(true);
    activate(connectorList[connectorName]);
  };

  const handleDisconnect = () => deactivate();

  const handleRetry = () => {
    setIsConnecing(false);
    deactivate();
  };

  useEffect(() => {
    if (active) setIsConnecing(false);
  }, [active]);

  return (
    <Box>
      {active && <Button onClick={handleDisconnect}>Disconnect</Button>}
      {!active && (
        <Button variant='outlined' onClick={handleClick('MetaMask')} disabled={isConnecing}>
          Connect MetaMask
        </Button>
      )}
      {!active && error && <Button onClick={handleRetry}>Retry</Button>}
    </Box>
  );
};

export default ConnectWallet;
