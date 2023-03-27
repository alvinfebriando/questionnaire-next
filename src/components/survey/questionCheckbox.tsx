import { AddSurveyField, SurveyFormValue } from '@/pages/admin/survey/add';
import { Question } from '@/types/question';
import { Box, Checkbox, Stack } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';

type QuestionCheckboxProps = {
  f: AddSurveyField;
  form: UseFormReturnType<
    SurveyFormValue,
    (values: SurveyFormValue) => SurveyFormValue
  >;
  questions: Question[];
};

const QuestionCheckbox = ({ f, form, questions }: QuestionCheckboxProps) => {
  const allChecked = questions.every(q => form.values.questions.includes(q.id));
  const indeterminate =
    questions.some(q => form.values.questions.includes(q.id)) && !allChecked;
  const questionId = questions.map(q => q.id);
  return (
    <>
      <Box sx={{ fontSize: '14px', fontWeight: 500 }}>
        <label>Pertanyaan</label>
      </Box>
      <Checkbox
        checked={allChecked}
        indeterminate={indeterminate}
        label='semua'
        onChange={() => {
          allChecked
            ? form.setFieldValue(f.name, [])
            : form.setFieldValue(f.name, questionId);
        }}
      />
      <Checkbox.Group key={f.name} {...form.getInputProps(f.name)}>
        <Stack>
          {questions.map(q => (
            <Checkbox key={q.id} value={q.id} label={q.question} />
          ))}
        </Stack>
      </Checkbox.Group>
    </>
  );
};

export default QuestionCheckbox;
