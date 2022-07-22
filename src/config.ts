import dotenv from 'dotenv';

dotenv.config();

export const { NODE_ENV } = process.env;

export const SUBGRAPH_URL =
  process.env.NODE_ENV === 'test'
    ? 'http://localhost:8000/subgraphs/name/talent-layer'
    : process.env.SUBGRAPH_URL || 'http://localhost:8000/subgraphs/name/talent-layer';
