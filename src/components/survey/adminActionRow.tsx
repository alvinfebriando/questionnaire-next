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
    </Group>
  );
};

export default AdminActionRow;
