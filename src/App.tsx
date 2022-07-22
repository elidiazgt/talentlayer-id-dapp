import { Web3ReactProvider } from '@web3-react/core';
import {
  ExternalProvider,
  JsonRpcFetchFunc,
  Web3Provider,
} from '@ethersproject/providers';

import ConnectWallet from './components/ConnectWallet';
import WalletInfo from './components/WalletInfo';

import './App.css';

function getLibrary(
  provider: ExternalProvider | JsonRpcFetchFunc
): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 8000;
  return library;
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <WalletInfo />
        <ConnectWallet />
      </div>
    </Web3ReactProvider>
  );
}

export default App;
