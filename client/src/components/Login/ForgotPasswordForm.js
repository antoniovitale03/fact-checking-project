import {useState} from "react";
import {Box, Typography, Stack, InputLabel, Input, FormControl, Button, TextField} from "@mui/material";
import "../../CSS/form.css"
export default function ForgotPasswordForm({setStep, email}) {

    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleSetNewPassword = () => {
        setStep(1);
    }

    return(
            <Stack component="form" spacing={10} onSubmit={handleSetNewPassword}>
                    <Typography variant="h4">Imposta la nuova password</Typography>
                    <TextField label="Email" type="email" value={email}  />
                    <TextField label="Nuova password" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                    <TextField label="Conferma nuova password" type="password" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)}  />
                    <Button variant="contained" type="submit">Invia</Button>
            </Stack>

    )
}