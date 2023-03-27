import { API_URL, API_URL_PUBLIC } from './common';
import { Surveys, SurveyFormValue, AddSurveyRequest } from '../types/survey';

export const getAllSurvey = async (): Promise<Surveys> => {
  const response = await fetch(`${API_URL}/survey`, {
    method: 'GET',
  });
  const data: Surveys = await response.json();
  return data;
};

export const addSurvey = async (survey: AddSurveyRequest) => {
  const response = await fetch(`${API_URL_PUBLIC}/survey`, {
    method: 'POST',
    body: JSON.stringify(survey),
    headers: {
      'Content-type': 'application/json',
    },
  });
  console.log(response);
};
