import { Chip, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import TalentLayerContext from '../context/talentLayer';
import { confirmJob, finishJob } from '../contracts/utils';

const JobCard = () => {
  const { signer } = useContext(TalentLayerContext);

  const handleConfirmJob = async () => {
    try {
      if (!signer) return;
      await confirmJob(signer, '9');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  const handleFinishJob = async () => {
    try {
      if (!signer) return;
      await finishJob(signer, '9');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant='h4' component='div'>
          Job title
          <Chip label='#1' size='small' sx={{ marginLeft: '5px' }} />
        </Typography>
        <Typography variant='body2'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis vitae provident,
          deleniti deserunt suscipit, placeat ipsa nostrum tempore.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>View transaction</Button>
        <Button size='small' onClick={handleConfirmJob}>
          Confirm Job
        </Button>
        <Button size='small' onClick={handleFinishJob}>
          Finish Job
        </Button>
        <Button size='small' component={Link} to='/add-review/9'>
          Create a review
        </Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;
