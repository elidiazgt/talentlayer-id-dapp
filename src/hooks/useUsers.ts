import { useState, useEffect } from 'react';
import { getUsers } from '../services/queries';

const useUsers = (): any => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUsers();
        if (response?.data?.data?.users) {
          setUsers(response.data.data.users);
        }
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return { users };
};

export default useUsers;
