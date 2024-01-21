import { TextField, TextFieldProps, Typography } from '@mui/material';
import { Control, useController } from 'react-hook-form';

interface IFieldProps {
  name: string;
  control: Control<any>;
  required?: boolean;
}

export const Field = ({
  name,
  control,
  required,
  ...props
}: IFieldProps & TextFieldProps) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules: {
      required: required ? 'O campo é obrigatório' : false,
    },
  });

  return (
    <>
      <TextField
        value={field.value}
        onChange={(e) => field.onChange(e.target.value)}
        error={Boolean(fieldState.error)}
        {...props}
      />

      {fieldState.error?.message && (
        <Typography variant="caption" color={'red'}>
          {fieldState.error?.message}
        </Typography>
      )}
    </>
  );
};
