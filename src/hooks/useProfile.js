import { useQuery } from 'react-query'
import { getProfiles } from '../api/api'

export const useProfile = () => {
  const { isSuccess, data, isLoading } = useQuery('profile', getProfiles)
  
  return {
    isSuccess,
    data,
    isLoading
  };
};
