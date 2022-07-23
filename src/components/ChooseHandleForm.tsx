import { useNavigate } from 'react-router-dom';
import { Button, Stack, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { object, string } from 'yup';

const ChooseHandleForm = () => {
  const navigate = useNavigate();

  const createHandle = async ({ handle }: { handle: string }): Promise<void> => {
    try {
      // eslint-disable-next-line no-console
      console.log(handle);
      navigate(`/mint-handle/${handle}`);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      handle: '',
    },
    enableReinitialize: true,
    onSubmit: createHandle,
    validationSchema: object({
      handle: string().min(5).required('handle is required'),
      // add async RPC call to check if handle is duplicated
    }),
  });
  const { errors, isValid, touched, handleChange, handleSubmit, values, handleBlur } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} mt={2}>
        <TextField
          id='handle'
          name='handle'
          label='handle'
          value={values.handle}
          onChange={handleChange}
          error={Boolean(errors.handle && touched.handle)}
          helperText={errors.handle && touched.handle ? errors.handle : ''}
          onBlur={handleBlur}
          required
        />

        <Stack direction='row' justifyContent='center'>
          <Button
            variant='contained'
            type='submit'
            size='large'
            disabled={!isValid || Object.keys(touched).length === 0}>
            Create Handle
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default ChooseHandleForm;
