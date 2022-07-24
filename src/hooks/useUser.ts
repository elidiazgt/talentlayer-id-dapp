import { useState, useEffect, useContext } from 'react';
import TalentLayerContext from '../context/talentLayer';
import { getUserById } from '../services/queries';
import { User } from '../types';

const useUser = (): User | null => {
  const { talentLayerId } = useContext(TalentLayerContext);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!talentLayerId) {
        return;
      }

      try {
        const response = await getUserById(talentLayerId);
        if (response?.data?.data?.user) {
          setUser(response.data.data.user);
        }
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    };
    fetchData();
  }, [talentLayerId]);

  return user;
};

export default useUser;
