import { Answer } from '@/types/answer';
import { API_URL_PUBLIC } from './common';

export const sendAnswer = async (answers: Answer[]) => {
  const response = await fetch(`${API_URL_PUBLIC}/answer`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ answers }),
  });
};

export const sendAnswerSimulation = async (answers: Answer[], n: number) => {
  const response = await fetch(`${API_URL_PUBLIC}/answer/simulate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ answers, n }),
  });
};
