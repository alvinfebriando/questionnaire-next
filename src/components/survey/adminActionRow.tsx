import { Survey } from '@/types/survey';
import { Group, ActionIcon, Tooltip } from '@mantine/core';
import { IconTrash, IconReport } from '@tabler/icons-react';
import { UUID } from 'crypto';
import { useRouter } from 'next/router';

type AdminActionRowProps = {
  survey: Survey;
  handleDelete: (id: UUID) => void;
};

const AdminActionRow = ({ survey, handleDelete }: AdminActionRowProps) => {
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
      <Tooltip label='Delete survey'>
        <ActionIcon color='red' onClick={() => handleDelete(survey.id)}>
          <IconTrash size={16} />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
};

export default AdminActionRow;
