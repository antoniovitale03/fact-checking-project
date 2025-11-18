import {useEffect, useState} from "react";
import {Box, Typography, Button, Stack, TextField} from "@mui/material";
import {Link} from "react-router-dom";
import api from "../../api";
import "../../CSS/form.css"

export default function LoginForm({setStep, email, setEmail}) {


    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
    }

    const handleForgotPassword = () => {
        if(email === "") return;
        setStep(2);
    }

    return (
        <>
            <Stack component="form" spacing={10} onSubmit={handleLogin}>
                <Typography variant="h4" sx={{ textAlign: 'center' }}>Login</Typography>
                <TextField label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                <TextField label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <Button type="submit">Login</Button>
            </Stack>

            <Typography component={Link} sx={{ color: 'black', cursor: 'pointer' }} onClick={handleForgotPassword}>
                Hai dimenticato la password?
            </Typography>

            <Typography component="p" sx={{ marginTop: '2vw' }}>
                Non hai ancora un account? Clicca <Link to="/registration" style={{ color: 'black' }}>qui</Link> per registrarti.
            </Typography>
        </>
    )
}
