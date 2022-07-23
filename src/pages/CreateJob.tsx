/* eslint-disable no-console */
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Box, MenuItem, Stack, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { LoadingButton } from '@mui/lab';
import TalentLayerContext from '../context/talentLayer';
import { createJobFromEmployer, createJobFromEmployee } from '../contracts/utils';

const CreateJob = () => {
  const { signer, talentLayerId, talentLayerHandle } = useContext(TalentLayerContext);
  const navigate = useNavigate();
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState<string | null>(null);
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
    try {
      if (!signer) return;

      // eslint-disable-next-line no-console
      console.log({ title, about, keywords, role, recipient });

      setIsPosting(true);
      // TODO: async function post to IPFS and get URI
      if (role === 'Client') {
        console.log('create job as client');
        await createJobFromEmployee(signer, recipient, 'tempURI');
      } else {
        console.log('create job as freelancer');
        await createJobFromEmployer(signer, recipient, 'tempURI');
      }

      navigate(`/create-job-success`);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      setError('Failed to create the job');
      setIsPosting(false);
    }
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
  const { errors, isValid, touched, handleChange, handleSubmit, values, handleBlur, setTouched } =
    formik;

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
            select
            required
            style={{ width: 500 }}
            value={values.role}
            onChange={e => {
              handleChange(e);
              setTouched({ ...touched, role: true });
            }}>
            {['Client', 'Freelancer'].map(role => (
              <MenuItem key={role} value={role}>
                {role}
              </MenuItem>
            ))}
          </TextField>

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
            <LoadingButton
              variant='contained'
              type='submit'
              size='large'
              disabled={!isValid || Object.keys(touched).length === 0}>
              {isPosting ? 'Posting...' : 'Create Job'}
            </LoadingButton>
          </Stack>
        </Stack>
      </form>

      {error && (
        <Alert severity='error' sx={{ marginTop: '10px' }}>
          {error}
        </Alert>
      )}
    </Box>
  );
};

export default CreateJob;
