import { httpPost } from '../providers/http';
import { IUser } from '../types/User';

interface ISignUpServiceProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const signUpService = async (values: ISignUpServiceProps) => {
  try {
    const user = await httpPost<IUser>({
      endpoint: 'users',
      body: {
        name: values.name,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      },
    });

    return user;
  } catch (error) {
    alert('Não foi possivel cadastrar o usuário');
    throw error;
  }
};
