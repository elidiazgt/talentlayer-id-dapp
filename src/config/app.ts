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
  talentLayerIdAddress: '0x45Cd9E9C04d0701b23089C44Faa807932996717E',
  jobRegistryAddress: '0xFAe97514c8e94501E66F0AEf84E4Cccb7eb2EB84',
  talentLayerReviewAddress: '0x8685C7359DeE31703a1f47F8dabad7879148cFCf',
  proofOfHumanityAddress: '0xc7729F499f3D81643597a1e1666E9b6F8D702F8D',
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
