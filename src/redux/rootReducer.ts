import { combineReducers } from '@reduxjs/toolkit';

import userSlice from 'features/User/User.slice';
import questionSlice from 'features/Question/Question.slice';

const rootReducer = combineReducers({
  user: userSlice,
  question: questionSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
