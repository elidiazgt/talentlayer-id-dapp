import { Contract } from '@ethersproject/contracts';
import { config } from '../config/app';
import TalentLayerIDABI from './TalentLayerID.json';

export const checkHandleUniqueness = async (
  library: any,
  account: string | null | undefined,
  newHandle?: string,
): Promise<boolean> => {
  if (!newHandle) {
    return false;
  }
  const signer = library.getSigner(account);
  const talentLayerID = new Contract(config.talentLayerIdAddress, TalentLayerIDABI.abi, signer);
  const isHandleTaken = await talentLayerID.takenHandles(newHandle);
  return !isHandleTaken;
};

export const mint = async (
  library: any,
  account: string | null | undefined,
  handle: string,
  isRegisterToPoh: boolean | null,
): Promise<string> => {
  const signer = library.getSigner(account);
  const talentLayerID = new Contract(config.talentLayerIdAddress, TalentLayerIDABI.abi, signer);
  let id;

  if (isRegisterToPoh) {
    id = await talentLayerID.mintWithPoh(handle);
  } else {
    id = await talentLayerID.mint(handle);
  }
  return id;
};
