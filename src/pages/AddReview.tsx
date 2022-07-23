import { LoadingButton } from '@mui/lab';
import { Alert, Box, Grid, Stack, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { number, object, string } from 'yup';
import TalentLayerContext from '../context/talentLayer';
import { addReview } from '../contracts/utils';

const AddReview = () => {
  const { signer } = useContext(TalentLayerContext);
  const { jobId } = useParams<{ jobId: string }>();
  const [isMinting, setIsMinting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddReview = async ({ review, rating }: { review: string; rating: number }) => {
    try {
      if (!jobId || !signer) return;

      setIsMinting(true);
      // First post data to ipfs and get the CID
      // Then add review
      await addReview(signer, jobId, 'tempURI');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      setIsMinting(false);
      setError('Impossible to mint the review');
    }
  };

  const formik = useFormik({
    initialValues: {
      review: '',
      rating: 3,
    },
    enableReinitialize: true,
    onSubmit: handleAddReview,
    validationSchema: object({
      review: string().required('review is required'),
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
            id='review'
            name='review'
            label='review'
            value={values.review}
            onChange={handleChange}
            error={Boolean(errors.review && touched.review)}
            helperText={errors.review && touched.review ? errors.review : ''}
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
              variant='contained'
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
