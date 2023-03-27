import { Survey } from '@/types/survey';
import { Group, ActionIcon } from '@mantine/core';
import { IconEye, IconEdit, IconTrash } from '@tabler/icons-react';

type RespondentActionRowProps = {
  survey: Survey;
};

const RespondentActionRow = ({ survey }: RespondentActionRowProps) => (
  <Group spacing={4} position='right' noWrap>
    <ActionIcon color='green' onClick={() => console.log(survey)}>
      <IconEye size={16} />
    </ActionIcon>
  </Group>
);

export default RespondentActionRow;
