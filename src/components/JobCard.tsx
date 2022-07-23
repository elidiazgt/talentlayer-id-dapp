import { Chip, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import TalentLayerContext from '../context/talentLayer';
import { confirmJob, finishJob } from '../contracts/utils';
import { Job, Status } from '../types';

interface IProps {
  job: Job;
}

const JobCard = ({ job }: IProps) => {
  const { talentLayerId, signer } = useContext(TalentLayerContext);
  const isInitiator: boolean = job.sender.id === talentLayerId;

  const handleConfirmJob = async () => {
    try {
      if (!signer) return;
      await confirmJob(signer, job.id);
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
    <Card sx={{ minWidth: 275, marginBottom: '20px' }}>
      <CardContent>
        <Typography variant='h4' component='div'>
          Job title
          <Chip label={`#${job.id}`} size='small' sx={{ marginLeft: '5px' }} />
        </Typography>
        <Typography variant='body2' sx={{ minWidth: 275, marginTop: '10px' }}>
          <strong>Description:</strong> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Blanditiis vitae provident, deleniti deserunt suscipit, placeat ipsa nostrum tempore.
          <br />
          <strong>Status:</strong> {job.status} <br />
          <strong>Role:</strong> {job.employee.id === talentLayerId ? 'Employee' : 'Employer'}{' '} <br />
          <strong>Review:</strong> lorem ipsum <br />
        </Typography>
      </CardContent>
      <CardActions>
        {!isInitiator && job.status === Status.Intialized && (
          <Button size='small' onClick={handleConfirmJob}>
            Confirm Job
          </Button>
        )}
        {job.status === Status.Confirmed && (
          <Button size='small' onClick={handleFinishJob}>
            Finish Job
          </Button>
        )}
        {job.status === Status.Finished && (
          <Button size='small' component={Link} to='/add-review/9'>
            Create a review
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default JobCard;
