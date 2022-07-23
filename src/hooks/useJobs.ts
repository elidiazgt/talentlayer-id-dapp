import { useState, useEffect } from 'react';
import { getJobs } from '../services/queries';
import { Job } from '../types';

const useJobs = (): { jobs: Job[] } => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getJobs();
        if (response?.data?.data?.jobs) {
          setJobs(response.data.data.jobs);
        }
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return { jobs };
};

export default useJobs;
