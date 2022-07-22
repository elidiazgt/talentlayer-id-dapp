import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Web3ReactProvider } from '@web3-react/core';
import { Container } from '@mui/material';
import getLibrary from './services/web3';
import { Header } from './components';
import { Home } from './pages';

const App = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Router>
        <Container maxWidth='xl'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Container>
      </Router>
    </Web3ReactProvider>
  );
};

export default App;
