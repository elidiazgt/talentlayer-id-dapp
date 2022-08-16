import { Button, Stack, TextField } from '@mui/material';
import { useFormik } from 'formik';

const RecoverComponent = () => {
    let wallet = 'xxxxx'

    return <div>
        <h1>Recover my Id</h1>
        <form >
            <Stack spacing={2} mt={2}>
                <TextField label='Your TalentLayer ID Handle'/>
                <TextField label='Your Original Wallet'/>
                <TextField label='Your Emergency Recovery Password' />
                <div>
                    Your TalentLayer ID will be transfered to the wallet you currently have connected upon initiation.
                    Does this look correct?
                    [{wallet}]

                </div>
                <Stack direction='row' justifyContent='center'>
                    <Button
                        variant='outlined'
                        type='submit'
                        size='large'
                    >
                        Initiate Recovery
                    </Button>
                </Stack>
            </Stack>
        </form>
    </div>
    
}




export default RecoverComponent;
