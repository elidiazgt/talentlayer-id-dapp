export enum Network {
  LOCAL = 1337,
  MAINNET = 1,
  GNOSIS = 100,
}

type Config = {
  networkId: Network;
  rpcUrl: string;
  talentLayerIdAddress: string;
  jobRegistryAddress: string;
  talentLayerReviewAddress: string;
  proofOfHumanityAddress: string;
};

const local = {
  networkId: Network.LOCAL,
  rpcUrl: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`,
  talentLayerIdAddress: '0xdC41bA8cC4d95eDBdc1e0367A2EC61969B98EC0b',
  jobRegistryAddress: '0x78939ABA66D1F73B0D76E9289BA79bc79dC079Dc',
  talentLayerReviewAddress: '0x931dA829f06c02fCD683a9153bBD40EF7Ce1E907',
  proofOfHumanityAddress: '0xc26F2Cd11DfD618CCD345ad24435e97D8aC521C6',
};

const gnosis = {
  networkId: Network.GNOSIS,
  rpcUrl: `https://rpc.ankr.com/gnosis`,
  talentLayerIdAddress: '0xfC36a323D56A041011b5c2b537EA809e2AB7C8b7',
  jobRegistryAddress: '0xa0ba381942EE16CAbf901f831A8C5B722C907263',
  talentLayerReviewAddress: '0x67E3Aa6F076445197DfF91e0E776588FE09951aD',
  proofOfHumanityAddress: '0x286cAf49975bACc6D0E80b52c8464fb1108F80fd',
};

const mainnet = {} as Config;

const chains: { [networkId in Network]: Config } = {
  [Network.LOCAL]: local,
  [Network.MAINNET]: mainnet,
  [Network.GNOSIS]: gnosis,
};

export const config: Config = process.env.REACT_APP_NETWORK_ID
  ? chains[+process.env.REACT_APP_NETWORK_ID as Network]
  : chains[Network.LOCAL];

export const SUBGRAPH_URL =
  process.env.REACT_APP_SUBGRAPH_URL ||
  'https://api.thegraph.com/subgraphs/name/talentlayerid/talent-layer-id';

export const projectId = process.env.REACT_APP_INFURA_ID || '';
export const projectSecret = process.env.REACT_APP_INFURA_SECRET || '';
