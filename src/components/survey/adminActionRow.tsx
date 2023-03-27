import { Survey } from '@/types/survey';
import { Group, ActionIcon } from '@mantine/core';
import { IconEye, IconEdit, IconTrash } from '@tabler/icons-react';

type AdminActionRowProps = {
  survey: Survey;
};

const AdminActionRow = ({ survey }: AdminActionRowProps) => (
  <Group spacing={4} position='right' noWrap>
    <ActionIcon color='green' onClick={() => console.log(survey)}>
      <IconEye size={16} />
    </ActionIcon>
    <ActionIcon color='blue' onClick={() => console.log(survey)}>
      <IconEdit size={16} />
    </ActionIcon>
    <ActionIcon color='red' onClick={() => console.log(survey)}>
      <IconTrash size={16} />
    </ActionIcon>
  </Group>
);

export default AdminActionRow;
