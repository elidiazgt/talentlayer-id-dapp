import { Button, Stack, TextField } from '@mui/material';
import { AnyAaaaRecord } from 'dns';
import { useState, useContext } from 'react';
import RecoverComponentResult from '../components/RecoverComponentResult';
import TalentLayerContext from '../context/talentLayer';
const RecoverComponent = () => {
    const { talentLayerId, talentLayerHandle } = useContext(TalentLayerContext);
    const [showform, setShowform] = useState(false)
    const [state, setState] = useState(
        { id: '', wallet: '', password: '' }
    );
    console.log('talentLayerHandle', talentLayerHandle)
    let wallet = 'xxxxx'
    function handleChange(e: Event) {
        const value = e.target.value;
        setState({ 
            ...state,
            [e.target.name]: value
        });
    }
    let handleLoginClick = () => {
        setShowform(true)
    }
    let recover = () => {
        console.log('recover', state)
    }
    return <div>
        <h1>Recover my Id</h1>
        {showform ?
            <Stack spacing={2} mt={2}>
                <TextField name='id' label='Your TalentLayer ID Handle' onChange={handleChange} />
                <TextField name='wallet' label='Your Original Wallet' onChange={handleChange} />
                <TextField name='password' label='Your Emergency Recovery Password' onChange={handleChange} />
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
                        onClick={recover}
                    >
                        Initiate Recovery
                    </Button>
                </Stack>
            </Stack>
            :
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
                        onClick={handleLoginClick}
                    >
                        Recover My Account
                    </Button>
                </Stack>
                <div>
                    Currently this feature is only available for wallets
                    that have Proof of Humanity verified.
                </div>
            </Stack>
        }
    </div>
}
export default RecoverComponent;
