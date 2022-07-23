import dotenv from 'dotenv';

dotenv.config();

export const { NODE_ENV } = process.env;

export const SUBGRAPH_URL =
  process.env.SUBGRAPH_URL ||
  'https://api.thegraph.com/subgraphs/name/talentlayerid/talent-layer-id';
