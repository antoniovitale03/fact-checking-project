import {useState} from "react";
import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import "../../CSS/form.css";

export default function RegistrationForm({email, setEmail, setStep}){

    const [button, setButton] = useState('Registrati');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = () => setStep(2);

    return(
        <>
            <Stack component="form" spacing={10} onSubmit={handleRegistration}>
                <Typography variant="h4" sx={{ textAlign: 'center' }}>Registrazione</Typography>
                <TextField label="Username" type="text" variant="outlined" value={username} onChange={e => setUsername(e.target.value)} />
                <TextField label="Email" type="email" variant="outlined" value={email} onChange={e => setEmail(e.target.value)} />
                <TextField label="Password" type="password" variant="outlined" value={password} onChange={e => setPassword(e.target.value)} />

                {
                    button === "Registrati" ? <Button type="submit" variant="contained">{button}</Button> :
                        <Button loading variant="contained" loadingPosition="end">Verifica in corso</Button>
                }
            </Stack>
            <Typography component="p">
                Hai già un account? Clicca <Link to="/login" style={{ color: 'black' }}>qui</Link> per loggarti.
            </Typography>
        </>

    )
}