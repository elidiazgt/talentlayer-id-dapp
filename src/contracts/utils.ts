import { Contract } from '@ethersproject/contracts';
import { Signer } from 'ethers';
import { config } from '../config/app';
import TalentLayerIDABI from './TalentLayerID.json';
import TalentLayerReview from './TalentLayerReview.json';
import JobRegistry from './JobRegistry.json';

export const checkHandleUniqueness = async (
  signer: Signer | null,
  newHandle?: string,
): Promise<boolean> => {
  if (!newHandle || !signer) {
    return false;
  }
  const talentLayerID = new Contract(config.talentLayerIdAddress, TalentLayerIDABI.abi, signer);
  const isHandleTaken = await talentLayerID.takenHandles(newHandle);
  return !isHandleTaken;
};

export const mint = async (
  signer: Signer,
  handle: string,
  isRegisterToPoh: boolean | null,
): Promise<string> => {
  const talentLayerID = new Contract(config.talentLayerIdAddress, TalentLayerIDABI.abi, signer);
  let id;

  if (isRegisterToPoh) {
    id = await talentLayerID.mintWithPoh(handle);
  } else {
    id = await talentLayerID.mint(handle);
  }
  return id;
};

export const createJobFromEmployer = async (
  signer: Signer,
  employeeId: string,
  jobDataUri: string,
): Promise<string> => {
  const jobRegistry = new Contract(config.jobRegistryAddress, JobRegistry.abi, signer);
  const jobId = await jobRegistry.createJobFromEmployer(employeeId, jobDataUri);
  return jobId;
};

export const createJobFromEmployee = async (
  signer: Signer,
  employeeId: string,
  jobDataUri: string,
): Promise<string> => {
  const jobRegistry = new Contract(config.jobRegistryAddress, JobRegistry.abi, signer);
  const jobId = await jobRegistry.createJobFromEmployee(employeeId, jobDataUri);
  return jobId;
};

export const confirmJob = async (signer: Signer, jobId: string): Promise<void> => {
  const jobRegistry = new Contract(config.jobRegistryAddress, JobRegistry.abi, signer);
  await jobRegistry.confirmJob(jobId);
};

export const finishJob = async (signer: Signer, jobId: string): Promise<void> => {
  const jobRegistry = new Contract(config.jobRegistryAddress, JobRegistry.abi, signer);
  await jobRegistry.finishJob(jobId);
};

export const rejectJob = async (signer: Signer, jobId: string): Promise<void> => {
  const jobRegistry = new Contract(config.jobRegistryAddress, JobRegistry.abi, signer);
  await jobRegistry.rejectJob(jobId);
};

export const addReview = async (
  signer: Signer,
  jobId: string,
  rating: number,
  reviewUri: string,
): Promise<void> => {
  const talentLayerReview = new Contract(
    config.talentLayerReviewAddress,
    TalentLayerReview.abi,
    signer,
  );
  await talentLayerReview.addReview(jobId, reviewUri, rating);
};
