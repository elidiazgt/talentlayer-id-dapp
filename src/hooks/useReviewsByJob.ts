import { useState, useEffect } from 'react';
import { getReviewsByJob } from '../services/queries';
import { Review } from '../types';

const useReviewsByJob = (jobId: string): { reviews: Review[] } => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getReviewsByJob(jobId);
        if (response?.data?.data?.reviews) {
          setReviews(response.data.data.reviews);
        }
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    };
    fetchData();
  }, [jobId]);

  return { reviews };
};

export default useReviewsByJob;
