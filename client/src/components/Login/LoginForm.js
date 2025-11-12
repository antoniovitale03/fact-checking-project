import {useEffect, useState} from "react";
import {Box, Typography, Button, Stack, TextField} from "@mui/material";
import {Link} from "react-router-dom";
import api from "../../api";
import "../../CSS/Form.css"

export default function LoginForm({setStep, email, setEmail}) {


    const [password, setPassword] = useState("");

    const handleLogin = () => {}

    const handleForgotPassword = () => {
        if(email !== ""){
            setStep(2);
        }
    }

    return (
        <Box className="page-content">
            <Box component="form" onSubmit={handleLogin}>
                <Stack spacing={10}>
                    <Typography variant="h4" sx={{ textAlign: 'center' }}>Login</Typography>
                    <TextField label="Email" type="email" variant="outlined" value={email} onChange={e => setEmail(e.target.value)} />
                    <TextField label="Password" type="password" variant="outlined" value={password} onChange={e => setPassword(e.target.value)} />
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
