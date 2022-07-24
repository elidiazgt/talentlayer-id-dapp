import { useState, useEffect } from 'react';
import { ReviewDetails } from '../types';
import { isValidHttpsUrl } from '../utils';

const useReviewDetails = (uri: string): ReviewDetails | null => {
  const [reviewDetails, setReviewDetails] = useState<ReviewDetails | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!isValidHttpsUrl(uri)) {
          throw new Error('Uri not valid');
        }

        const response = await fetch(uri);
        const data: ReviewDetails = await response.json();
        if (data) {
          setReviewDetails(data);
        }
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    };
    fetchData();
  }, [uri]);

  return reviewDetails;
};

export default useReviewDetails;
