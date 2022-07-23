/* eslint-disable no-console */
import { create, IPFSHTTPClient } from 'ipfs-http-client';
import { projectId, projectSecret } from '../config/app';

const postToIPFS = async (data: any): Promise<string> => {
  let ipfs: IPFSHTTPClient | undefined;
  let path = '';
  try {
    const authorization = 'Basic ' + btoa(projectId + ':' + projectSecret);
    ipfs = create({
      url: 'https://ipfs.infura.io:5001/api/v0',
      headers: {
        authorization,
      },
    });
    const result = await (ipfs as IPFSHTTPClient).add(data);
    path = `https://ipfs.infura.io/ipfs/${result.path}`;
  } catch (error) {
    console.error('IPFS error ', error);
  }
  return path;
};

export default postToIPFS;
