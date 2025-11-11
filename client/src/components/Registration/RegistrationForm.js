import {useState} from "react";
import {Box, Button, FormControl, Input, InputLabel, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export default function RegistrationForm({email, setEmail, setStep}){

    const [button, setButton] = useState('Registrati');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = () => setStep(2);

    return(
        <Box>
            <Box component="form" onSubmit={handleRegistration}>
                <Stack spacing={10}>
                    <Typography variant="h4" sx={{ textAlign: 'center' }}>Registrazione</Typography>
                    <FormControl>
                        <InputLabel htmlFor="username">Nome Utente</InputLabel>
                        <Input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                    </FormControl>

                    <FormControl>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </FormControl>

                    <FormControl>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </FormControl>

                    {
                        button === "Registrati" ? <Button type="submit" variant="contained">{button}</Button> :
                            <Button loading variant="contained" loadingPosition="end">Verifica in corso</Button>
                    }

                </Stack>
            </Box>
            <Typography component="p">
                Hai già un account? Clicca <Link to="/login" style={{ color: 'black' }}>qui</Link> per loggarti.
            </Typography>
        </Box>
    )
}