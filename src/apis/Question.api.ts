import axios from 'axios';

import { API_URL } from 'constants/constant';
import { Difficulty } from 'enums/Difficulty.enum';
import { requestParams } from 'utils';

const API_SERVICE = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

export const listQuestionsAPI = async (
  amount: string,
  category: string,
  difficulty: Difficulty,
  type: string,
) => {
  const params = {
    amount,
    category,
    difficulty,
    type,
  };
  return await API_SERVICE.get('api.php', {
    params,
    paramsSerializer: (params) => requestParams(params),
  });
};
