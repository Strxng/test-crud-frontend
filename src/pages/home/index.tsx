import { Button, Typography } from '@mui/material';
import { PageWrapper } from '../../components/PageWrapper';
import { useUserContext } from '../../contexts/userContext';

import * as S from './styles';
import { useMutation } from 'react-query';
import { accountDeleteService } from '../../services/accountDelete';

export const HomePage = () => {
  const { user, setUser } = useUserContext();

  const accountDeleteMutation = useMutation(accountDeleteService, {
    onSuccess: () => {
      setUser(null);
    },
  });

  const handleDisconect = () => {
    setUser(null);
  };

  const handleDelete = () => {
    accountDeleteMutation.mutate();
  };

  return (
    <PageWrapper>
      <S.Container>
        <Typography>{user?.name}</Typography>
        <Typography>{user?.email}</Typography>

        <Button
          variant="contained"
          style={{ marginTop: 20 }}
          onClick={handleDisconect}
        >
          Desconectar
        </Button>
        <Button
          variant="contained"
          color="error"
          style={{ marginTop: 20 }}
          onClick={handleDelete}
        >
          {' '}
          Excluir conta
        </Button>
      </S.Container>
    </PageWrapper>
  );
};
