import { Button, Stack, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useContext } from 'react';


const RecoverComponentResult = () => {
let wallet = 'xxxxx'

    return <div>
        <h1>Recover Your TalentLayer ID</h1>
        <form >
        <Stack spacing={2} mt={2}>
            <div>
            Your account has been successfully recovered.
            </div>
            <Stack direction='row' justifyContent='center'>
                <Button
                    variant='outlined'
                    type='submit'
                    size='large'
                >
                    Go to Admin Center
                </Button>
            </Stack>
        </Stack>
        </form>
    </div>
}




export default RecoverComponentResult;
