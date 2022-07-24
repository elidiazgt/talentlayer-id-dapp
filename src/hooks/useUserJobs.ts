import { useContext } from 'react';
import TalentLayerContext from '../context/talentLayer';
import { Job } from '../types';
import useJobs from './useJobs';

const useUserJobs = (): Job[] => {
  const { talentLayerId } = useContext(TalentLayerContext);
  const { jobs } = useJobs();

  const userJobs: Job[] = jobs.filter(job => {
    if (job.employee.id === talentLayerId || job.employer.id === talentLayerId) {
      return true;
    }
    return false;
  });

  return userJobs.sort((a, b) => {
    if (+a.id > +b.id) return -1;
    return 1;
  });
};

export default useUserJobs;
