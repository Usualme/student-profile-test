import axios from 'axios'

export const getProfiles = async () => {

  const { data } = await axios.get('https://api.hatchways.io/assessment/students')

  return data
};
