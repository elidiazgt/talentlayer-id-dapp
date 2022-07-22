import { HashRouter as Router } from 'react-router-dom';
import { Web3ReactProvider } from '@web3-react/core';
import { ExternalProvider, JsonRpcFetchFunc, Web3Provider } from '@ethersproject/providers';
import { Box, Container, Typography } from '@mui/material';
import Wallet from './components/Wallet';

function getLibrary(provider: ExternalProvider | JsonRpcFetchFunc): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 8000;
  return library;
}

const App = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Router>
        <Container maxWidth='xl'>
          <Wallet />
          <Typography variant='h4' component='h1' letterSpacing={0.5}>
            TalentLayer
          </Typography>
          <Box
            display='flex'
            width='100%'
            height='calc(100vh - 64px)'
            alignItems='center'
            justifyContent='center'
            marginTop='auto'
            marginBottom='auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum
          </Box>
        </Container>
      </Router>
    </Web3ReactProvider>
  );
};

export default App;
