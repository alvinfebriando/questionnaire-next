import { Survey } from '@/types/survey';
import { Group, ActionIcon, Tooltip } from '@mantine/core';
import { IconEye, IconEdit, IconTrash, IconReport } from '@tabler/icons-react';
import { useRouter } from 'next/router';

type AdminActionRowProps = {
  survey: Survey;
};

const AdminActionRow = ({ survey }: AdminActionRowProps) => {
  const router = useRouter();
  return (
    <Group spacing={4} position='right' noWrap>
      <Tooltip label='View Report'>
        <ActionIcon
          color='green'
          onClick={() => router.push(`/admin/survey/${survey.id}`)}
        >
          <IconReport size={16} />
        </ActionIcon>
      </Tooltip>
      <ActionIcon color='blue' onClick={() => console.log(survey)}>
        <IconEdit size={16} />
      </ActionIcon>
      <ActionIcon color='red' onClick={() => console.log(survey)}>
        <IconTrash size={16} />
      </ActionIcon>
    </Group>
  );
};

export default AdminActionRow;
