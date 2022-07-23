import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Web3ReactProvider } from '@web3-react/core';
import { Container } from '@mui/material';
import { TalentLayerProvider } from './context/talentLayer';
import getLibrary from './services/web3';
import { Header } from './components';
import {
  AddReview,
  Home,
  AdminCenter,
  ChooseHandle,
  CreateJob,
  CreateJobSuccess,
  MintHandle,
  MintHandleSuccess,
  ProofOfHumanity,
  ProofOfHumanityCheck,
} from './pages';

const App = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <TalentLayerProvider>
        <Router>
          <Container maxWidth='xl'>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/admin-center/:handle' element={<AdminCenter />} />\
              <Route path='/create-job' element={<CreateJob />} />
              <Route path='/create-job-success' element={<CreateJobSuccess />} />
              <Route path='/choose-handle' element={<ChooseHandle />} />
              <Route path='/mint-handle/:handle' element={<MintHandle />} />
              <Route path='/mint-handle-success/:handle' element={<MintHandleSuccess />} />
              <Route path='/proof-of-humanity' element={<ProofOfHumanity />} />
              <Route path='/proof-of-humanity-check' element={<ProofOfHumanityCheck />} />
              <Route path='/add-review/:jobId' element={<AddReview />} />\
            </Routes>
          </Container>
        </Router>
      </TalentLayerProvider>
    </Web3ReactProvider>
  );
};

export default App;
