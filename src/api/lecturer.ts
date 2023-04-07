import { Lecturers } from '@/types/lecturer';
import { API_URL_PUBLIC } from './common';

export const getAllLecturer = async () => {
  const response = await fetch(`${API_URL_PUBLIC}/lecturer`, {
    method: 'GET',
  });
  const data: Lecturers = await response.json();
  return data.lecturers;
};
