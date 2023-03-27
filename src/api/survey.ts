import { API_URL } from './common';
import { Surveys } from '../types/survey';

export const getAllSurvey = async (): Promise<Surveys> => {
  const response = await fetch(`${API_URL}/survey`, {
    method: 'GET',
  });
  const data: Surveys = await response.json();
  return data;
};
