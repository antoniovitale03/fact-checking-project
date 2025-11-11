import {useState} from "react";
import {Box, FormControl, InputLabel, Typography, Button, Input, Stack} from "@mui/material";
import {Link} from "react-router-dom";


export default function LoginForm({setStep, email, setEmail}) {


    const [password, setPassword] = useState("");

    const handleLogin = () => {}

    const handleForgotPassword = () => {
        if(email !== ""){
            setStep(2);
        }
    }

    return (
        <Box>
            <Box component="form" onSubmit={handleLogin}>
                <Stack spacing={10}>
                    <Typography variant="h4" sx={{ textAlign: 'center' }}>Login</Typography>
                    <FormControl>
                        <InputLabel id="email">Email</InputLabel>
                        <Input type="email" value={email} onChange={ e => setEmail(e.target.value) } required />
                    </FormControl>
                    <FormControl id="password">
                        <InputLabel id="password">Password</InputLabel>
                        <Input type="password" value={password} onChange={ e => setPassword(e.target.value) } required />
                    </FormControl>
                    <Button type="submit">Login</Button>
                </Stack>
            </Box>

            <Typography component={Link} sx={{ color: 'black', cursor: 'pointer' }} onClick={handleForgotPassword}>
                Hai dimenticato la password?
            </Typography>

            <Typography component="p" sx={{ marginTop: '2vw' }}>
                Non hai ancora un account? Clicca <Link to="/registration" style={{ color: 'black' }}>qui</Link> per registrarti.
            </Typography>

        </Box>
    )
}
