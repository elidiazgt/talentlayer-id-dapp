import { useState, useEffect } from 'react';
import { getReviews } from '../services/queries';
import { Review } from '../types';

const useReviews = (): { reviews: Review[] } => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getReviews();
        if (response?.data?.data?.reviews) {
          setReviews(response.data.data.reviews);
        }
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return { reviews };
};

export default useReviews;
