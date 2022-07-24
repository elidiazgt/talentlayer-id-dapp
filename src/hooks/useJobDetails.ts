import { useState, useEffect } from 'react';
import { getReviewsByJob } from '../services/queries';
import { JobDetails, Review } from '../types';
import { isValidHttpsUrl } from '../utils';

const useJobDetails = (uri: string): JobDetails | null => {
  const [jobDetails, setJobDetails] = useState<JobDetails | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!isValidHttpsUrl(uri)) {
          throw new Error('Uri not valid');
        }

        const response = await fetch(uri);
        const data: JobDetails = await response.json();
        if (data) {
          setJobDetails(data);
        }
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    };
    fetchData();
  }, [uri]);

  return jobDetails;
};

export default useJobDetails;
