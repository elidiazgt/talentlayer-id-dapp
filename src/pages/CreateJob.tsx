import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import TalentLayerContext from '../context/talentLayer';

const CreateJob = () => {
  const { talentLayerId, talentLayerHandle } = useContext(TalentLayerContext);
  const navigate = useNavigate();

  console.log({ talentLayerId, talentLayerHandle });
  const createJob = async ({
    title,
    about,
    keywords,
    role,
    recipient,
  }: {
    title: string;
    about: string;
    keywords: string;
    role: string;
    recipient: string;
  }): Promise<void> => {
    // try {
    //   // eslint-disable-next-line no-console
    //   console.log(handle);
    //   navigate(`/mint-handle/${handle}`);
    // } catch (err) {
    //   // eslint-disable-next-line no-console
    //   console.error(err);
    // }
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      about: '',
      keywords: '',
      role: '',
      recipient: '',
    },
    enableReinitialize: true,
    onSubmit: createJob,
    validationSchema: object({
      title: string().required('title is required'),
      about: string().required('about is required'),
      keywords: string().required('keywords are required'),
      role: string().required('role is required'),
      recipient: string().required('recipient is required'),
    }),
  });
  const { errors, isValid, touched, handleChange, handleSubmit, values, handleBlur } = formik;

  return (
    <Box display='flex' flexDirection='column' width='100%' alignItems='center' padding={10}>
      <Typography variant='h3' component='h1' letterSpacing={0.5} sx={{ p: 3 }} gutterBottom>
        Create a Job
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={2} mt={2}>
          <TextField
            id='title'
            name='title'
            label='title'
            value={values.title}
            onChange={handleChange}
            error={Boolean(errors.title && touched.title)}
            helperText={errors.title && touched.title ? errors.title : ''}
            onBlur={handleBlur}
            required
            style={{ width: 500 }}
          />

          <TextField
            id='about'
            name='about'
            label='about'
            value={values.about}
            onChange={handleChange}
            error={Boolean(errors.about && touched.about)}
            helperText={errors.about && touched.about ? errors.about : ''}
            onBlur={handleBlur}
            multiline
            rows={4}
            required
            style={{ width: 500 }}
          />

          <TextField
            id='keywords'
            name='keywords'
            label='keywords'
            value={values.keywords}
            onChange={handleChange}
            error={Boolean(errors.keywords && touched.keywords)}
            helperText={errors.keywords && touched.keywords ? errors.keywords : ''}
            onBlur={handleBlur}
            required
            style={{ width: 500 }}
          />

          <TextField
            id='role'
            name='role'
            label='role'
            value={values.role}
            onChange={handleChange}
            error={Boolean(errors.role && touched.role)}
            helperText={errors.role && touched.role ? errors.role : ''}
            onBlur={handleBlur}
            required
            style={{ width: 500 }}
          />

          <TextField
            id='recipient'
            name='recipient'
            label='recipient'
            value={values.recipient}
            onChange={handleChange}
            error={Boolean(errors.recipient && touched.recipient)}
            helperText={errors.recipient && touched.recipient ? errors.recipient : ''}
            onBlur={handleBlur}
            required
            style={{ width: 500 }}
          />

          <Stack direction='row' justifyContent='center'>
            <Button
              variant='contained'
              type='submit'
              size='large'
              disabled={!isValid || Object.keys(touched).length === 0}>
              Create Job
            </Button>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
};

export default CreateJob;
