import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Field } from '../../../components/Field';
import { useMutation } from 'react-query';
import { signUpService } from '../../../services/signup';

interface IFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUp = () => {
  const signUpMutation = useMutation(signUpService);

  const { control, handleSubmit, setError } = useForm<IFormValues>({
    defaultValues: {
      name: '',
      email: '',
      confirmPassword: '',
      password: '',
    },
  });

  const onSubmit = (values: IFormValues) => {
    if (values.password !== values.confirmPassword) {
      setError('password', { message: 'Senhas não conferem' });
      setError('confirmPassword', { message: 'Senhas não conferem' });
      return;
    }

    signUpMutation.mutate(values, {
      onSuccess: (user) => {
        console.log(user);
      },
    });
  };

  return (
    <>
      <Field
        variant="standard"
        label="Seu nome"
        style={{ width: '100%' }}
        control={control}
        name="name"
        required
      />

      <Field
        variant="standard"
        label="Sua email"
        style={{ width: '100%' }}
        control={control}
        name="email"
        required
      />

      <Field
        variant="standard"
        label="Sua senha"
        style={{ width: '100%' }}
        control={control}
        name="password"
        required
        type="password"
      />

      <Field
        variant="standard"
        label="Confirme sua senha"
        style={{ width: '100%' }}
        control={control}
        name="confirmPassword"
        required
        type="password"
      />

      <Button
        variant="contained"
        style={{ marginTop: 20 }}
        onClick={handleSubmit(onSubmit)}
      >
        {signUpMutation.isLoading ? '...' : 'Cadastrar'}
      </Button>
    </>
  );
};
