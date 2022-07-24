import { LoadingButton } from '@mui/lab';
import { Alert, Box, Stack, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { number, object, string } from 'yup';
import TalentLayerContext from '../context/talentLayer';
import { addReview } from '../contracts/utils';
import postToIPFS from '../services/ipfs';

const AddReview = () => {
  const { signer } = useContext(TalentLayerContext);
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  const [isMinting, setIsMinting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddReview = async ({ content, rating }: { content: string; rating: number }) => {
    try {
      if (!jobId || !signer) return;

      setIsMinting(true);
      const uri = await postToIPFS(JSON.stringify({ content, rating }));
      await addReview(signer, jobId, uri);
      navigate(`/add-review-success`);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      setIsMinting(false);
      setError('Impossible to mint the review');
    }
  };

  const formik = useFormik({
    initialValues: {
      content: '',
      rating: 3,
    },
    enableReinitialize: true,
    onSubmit: handleAddReview,
    validationSchema: object({
      content: string().required('content is required'),
      rating: number().required('rating is required'),
    }),
  });
  const { errors, isValid, touched, handleChange, handleSubmit, values, handleBlur } = formik;

  return (
    <Box display='flex' flexDirection='column' width='100%' alignItems='center' padding={10}>
      <Typography variant='h3' component='h1' letterSpacing={0.5} sx={{ p: 3 }} gutterBottom>
        AddReview
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} mt={2}>
          <TextField
            id='content'
            name='content'
            label='content'
            value={values.content}
            onChange={handleChange}
            error={Boolean(errors.content && touched.content)}
            helperText={errors.content && touched.content ? errors.content : ''}
            onBlur={handleBlur}
            multiline
            rows={4}
            required
            style={{ width: 500 }}
          />

          <TextField
            id='rating'
            name='rating'
            label='rating'
            type='number'
            InputLabelProps={{
              shrink: true,
            }}
            value={values.rating}
            onChange={handleChange}
            error={Boolean(errors.rating && touched.rating)}
            helperText={errors.rating && touched.rating ? errors.rating : ''}
            onBlur={handleBlur}
            inputProps={{ inputMode: 'numeric', min: 0, max: 5 }}
            required
            style={{ width: 500 }}
          />

          <Stack direction='row' justifyContent='center'>
            <LoadingButton
              variant='outlined'
              type='submit'
              size='large'
              disabled={!isValid || Object.keys(touched).length === 0}>
              {isMinting ? 'Minting...' : 'Validate review'}
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

export default AddReview;
