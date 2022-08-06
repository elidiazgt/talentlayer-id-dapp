import { Button, Stack, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useContext } from 'react';


const RecoverComponent = () => {


    return <div>
        <h1>Recover my Id</h1>
        <form >
        <Stack spacing={2} mt={2}>
            <TextField

                label='Write down your new Address'
            />
            <Stack direction='row' justifyContent='center'>
                <Button
                    variant='outlined'
                    type='submit'
                    size='large'
                >
                    Transfer My Id
                </Button>
            </Stack>
        </Stack>
        </form>
    </div>
}




export default RecoverComponent;
