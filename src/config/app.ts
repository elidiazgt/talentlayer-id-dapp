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
  talentLayerIdAddress: '0x931dA829f06c02fCD683a9153bBD40EF7Ce1E907',
  jobRegistryAddress: '0xD80Fb0B9ED5af8dcA3aCD3EAdf215B074EF68DcF',
  talentLayerReviewAddress: '0x41cDF5Fd621645Bc5E0f0a943B297a2440924949',
  proofOfHumanityAddress: '0x78939ABA66D1F73B0D76E9289BA79bc79dC079Dc',
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