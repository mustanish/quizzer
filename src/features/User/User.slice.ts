import { createSlice } from '@reduxjs/toolkit';
import { Difficulty } from 'enums/Difficulty.enum';

export interface Profile {
  firstName: string;
  lastName: string;
  quizAmount: string;
  quizCategory: string;
  quizDifficulty: Difficulty;
  quizType: string;
}

interface UserState {
  profile: Profile | {};
}

const initialState: UserState = {
  profile: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      const { payload } = action;
      Object.assign(state.profile, payload);
    },
  },
});

export const { setProfile } = userSlice.actions;

export default userSlice.reducer;
