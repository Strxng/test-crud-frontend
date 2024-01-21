import { httpDelete } from '../providers/http';

export const accountDeleteService = async () => {
  await httpDelete({
    endpoint: 'users/me',
  });
};
