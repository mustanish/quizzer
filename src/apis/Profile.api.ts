import { Profile } from '../features/User/User.slice';

export const createProfile = (profile: Profile) => {
  localStorage.setItem('profile', JSON.stringify(profile));
};

export const fecthProfile = (): Profile => {
  return JSON.parse(localStorage.getItem('profile') || '{}');
};
