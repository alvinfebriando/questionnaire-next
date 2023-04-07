import { Questions } from '../types/question';
import { API_URL } from './common';

export const getAllQuestion = async () => {
  const response = await fetch(`${API_URL}/question`, {
    method: 'GET',
  });
  const data: Questions = await response.json();
  return data.questions;
};
