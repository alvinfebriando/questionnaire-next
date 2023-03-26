import { API_URL } from './common';
import { AllSurveyResponse } from './types';

export const getAllSurvey = async (): Promise<AllSurveyResponse> => {
  const response = await fetch(`${API_URL}/survey`, {
    method: 'GET',
  });
  const data: AllSurveyResponse = await response.json();
  return data;
};
