import { ExternalProvider, JsonRpcFetchFunc, Web3Provider } from '@ethersproject/providers';

export default function getLibrary(provider: ExternalProvider | JsonRpcFetchFunc): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 8000;
  return library;
}
