import { UUID } from 'crypto';

export type Lecturer = {
  id: UUID;
  name: string;
  title: string;
};

export type Lecturers = {
  lecturers: Lecturer[];
};
