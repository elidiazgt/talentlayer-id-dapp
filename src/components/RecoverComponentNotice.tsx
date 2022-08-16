import { Button, Stack, TextField } from '@mui/material';


const RecoverComponentNotice = () => {
    let wallet = 'xxxxx'

    return <div>
        <h1>Account Recovery</h1>
        <form >
            <Stack spacing={2} mt={2}>

                <div>
                    If you have lost access to the wallet holding your TalentLayer ID,
                    You have the option to initiate an emergency Recovery
                    In order to initiate a recovery, you must have your recovery
                    password that was provided to you when you initiated your account.
                </div>
                <Stack direction='row' justifyContent='center'>
                    <Button
                        variant='outlined'
                        size='large'
                    >
                        Recover My Account
                    </Button>
                </Stack>
                <div>Currently this feature is only available for wallets
                    that have Proof of Humanity verified.

                </div>
            </Stack>
        </form>
    </div>
}




export default RecoverComponentNotice;
