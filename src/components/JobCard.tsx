import { ButtonGroup, Chip, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import TalentLayerContext from '../context/talentLayer';
import { confirmJob, finishJob, rejectJob } from '../contracts/utils';
import { useReviewsByJob } from '../hooks';
import useJobDetails from '../hooks/useJobDetails';
import { Job, Status } from '../types';
import ReviewCard from './ReviewCard';

interface IProps {
  job: Job;
}

const JobCard = ({ job }: IProps) => {
  const { talentLayerId, signer } = useContext(TalentLayerContext);
  const { reviews } = useReviewsByJob(job.id);
  const jobDetails = useJobDetails(job.uri);
  const isInitiator: boolean = job.sender.id === talentLayerId;
  const hasReviewed = !!reviews.find(review => {
    if (review.to.id !== talentLayerId) {
      return true;
    }
    return false;
  });

  const handleConfirmJob = async () => {
    try {
      if (!signer) return;
      await confirmJob(signer, job.id);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  const handleRejectJob = async () => {
    try {
      if (!signer) return;
      await rejectJob(signer, job.id);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  const handleFinishJob = async () => {
    try {
      if (!signer) return;
      await finishJob(signer, job.id);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  return (
    <Card sx={{ minWidth: '100%', marginBottom: '20px' }}>
      <CardContent>
        <Typography variant='h4' component='div'>
          {jobDetails?.title ?? '-'}
          <Chip label={`#${job.id}`} size='small' sx={{ marginLeft: '5px' }} />
        </Typography>
        <Typography variant='body2'>
          <strong>Description:</strong> {jobDetails?.about ?? '-'}
        </Typography>
        <Typography variant='body2'>
          <strong>Keywords:</strong> {jobDetails?.keywords ?? '-'}
        </Typography>
        <Typography variant='body2'>
          <strong>Status:</strong> {job.status}
        </Typography>
        <Typography variant='body2'>
          <strong>Role:</strong> {job.employee.id === talentLayerId ? 'Employee' : 'Employer'}{' '}
        </Typography>
        <Typography variant='body2'>
          <strong>{job.employee.id === talentLayerId ? 'Employer' : 'Employee'}:</strong>{' '}
          {job.employee.id === talentLayerId ? job.employer.handle : job.employee.handle} <br />
        </Typography>
        {reviews.length > 0 && <strong>Reviews:</strong>}
        {reviews.map((review, index) => {
          return <ReviewCard key={index} review={review} />;
        })}
      </CardContent>
      <CardActions>
        {!isInitiator && job.status === Status.Initialized && (
          <ButtonGroup variant='contained'>
            <Button size='small' onClick={handleConfirmJob}>
              Confirm Job
            </Button>
            <Button size='small' onClick={handleRejectJob}>
              Reject Job
            </Button>
          </ButtonGroup>
        )}
        {job.status === Status.Confirmed && (
          <Button size='small' onClick={handleFinishJob}>
            Finish Job
          </Button>
        )}
        {job.status === Status.Finished && !hasReviewed && (
          <Button size='small' component={Link} to={`/add-review/${job.id}`}>
            Create a review
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default JobCard;
