import { useNavigate } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { Button, Stack, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { object, string } from 'yup';
import TalentLayerContext from '../context/talentLayer';
import { checkHandleUniqueness } from '../contracts/utils';

const ChooseHandleForm = () => {
  const { signer } = useContext(TalentLayerContext);
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
      handle: string()
        .min(3)
        .max(10)
        .required('handle is required')
        .test('checkHandleUniqueness', 'This handle already exist.', value =>
          checkHandleUniqueness(signer, value).then(isUnique => {
            return isUnique;
          }),
        ),
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
