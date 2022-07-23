import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Web3ReactProvider } from '@web3-react/core';
import { Container } from '@mui/material';
import getLibrary from './services/web3';
import { Header } from './components';
import { Home, ChooseHandle, MintHandle, ProofOfHumanity, ProofOfHumanityCheck } from './pages';

const App = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Router>
        <Container maxWidth='xl'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/choose-handle' element={<ChooseHandle />} />\
            <Route path='/mint-handle/:handle' element={<MintHandle />} />
            <Route path='/proof-of-humanity' element={<ProofOfHumanity />} />
            <Route path='/proof-of-humanity-check' element={<ProofOfHumanityCheck />} />
          </Routes>
        </Container>
      </Router>
    </Web3ReactProvider>
  );
};

export default App;
