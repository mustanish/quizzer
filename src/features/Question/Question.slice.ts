import { createSlice } from '@reduxjs/toolkit';
import { AppThunk } from 'redux/store';
import { Profile } from 'features/User/User.slice';
import { listQuestionsAPI } from 'apis/Question.api';

export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  options: string[];
}

interface QuestionState {
  questions: Record<string, Question>;
}

const initialState: QuestionState = {
  questions: {},
};

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      action.payload.results?.forEach((question: Question, key: number) => {
        state.questions[key + 1] = {
          ...question,
          options: [...question.incorrect_answers, question.correct_answer],
        };
      });
    },
  },
});

export const { setQuestions } = questionSlice.actions;

export default questionSlice.reducer;

export const listQuestions = (profile: Profile): AppThunk => async (dispatch) => {
  const { quizAmount, quizCategory, quizDifficulty, quizType } = profile;
  try {
    const { data } = await listQuestionsAPI(quizAmount, quizCategory, quizDifficulty, quizType);
    dispatch(setQuestions(data));
  } catch (err) {}
};
