import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Field } from '../../../components/Field';
import { useMutation } from 'react-query';
import { loginService } from '../../../services/login';

interface IFormValues {
  email: string;
  password: string;
}

export const SignIn = () => {
  const loginMutation = useMutation(loginService);

  const { control, handleSubmit } = useForm<IFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: IFormValues) => {
    loginMutation.mutate(
      {
        email: values.email,
        password: values.password,
      },
      {
        onSuccess: (token) => {
          console.log(token);
        },
      },
    );
  };

  return (
    <>
      <Field
        name="email"
        control={control}
        variant="standard"
        label="Seu email"
        style={{ width: '100%' }}
        required
      />

      <Field
        required
        name="password"
        control={control}
        variant="standard"
        label="Seu email"
        style={{ width: '100%' }}
        type="password"
      />

      <Button
        variant="contained"
        style={{ marginTop: 20 }}
        onClick={handleSubmit(onSubmit)}
      >
        {loginMutation.isLoading ? '...' : 'Login'}
      </Button>
    </>
  );
};
