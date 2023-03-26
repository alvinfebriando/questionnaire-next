import { SurveyResponse } from '@/api/types';
import { Group, ActionIcon } from '@mantine/core';
import { IconEye, IconEdit, IconTrash } from '@tabler/icons-react';

type RespondentActionRowProps = {
  survey: SurveyResponse;
};

const RespondentActionRow = ({ survey }: RespondentActionRowProps) => (
  <Group spacing={4} position='right' noWrap>
    <ActionIcon color='green' onClick={() => console.log(survey)}>
      <IconEye size={16} />
    </ActionIcon>
  </Group>
);

export default RespondentActionRow;
