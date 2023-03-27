import { Question } from '../types/question';
import { API_URL } from './common';

export const getAllQuestion = async () => {
  const response = await fetch(`${API_URL}/question`, {
    method: 'GET',
  });
  const data: Question[] = await response.json();
  return data;
};
