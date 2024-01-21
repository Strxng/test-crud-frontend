import { createProviderApi, httpPost } from '../providers/http';

interface ILoginServiceProps {
  email: string;
  password: string;
}

export const loginService = async (values: ILoginServiceProps) => {
  try {
    const { accessToken } = await httpPost<{ accessToken: string }>({
      endpoint: 'auth/login',
      body: {
        email: values.email,
        password: values.password,
      },
    });

    createProviderApi(accessToken);

    return accessToken;
  } catch (error) {
    alert('Email ou senha inválidos');
    throw error;
  }
};
