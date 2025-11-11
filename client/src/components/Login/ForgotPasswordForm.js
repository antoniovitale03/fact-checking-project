import {useState} from "react";
import {Box, Typography, Stack, InputLabel, Input, FormControl, Button} from "@mui/material";

export default function ForgotPasswordForm({setStep, email}) {

    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleSetNewPassword = () => {
        setStep(1);
    }

    return(
        <Box component="form" onSubmit={handleSetNewPassword}>
            <Stack spacing={10}>
                <Typography variant="h4">Imposta la nuova password</Typography>
                <FormControl>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input type="email" id="email" value={email} required />
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="newPassword">Nuova password</InputLabel>
                    <Input type="password" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required/>
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="confirmNewPassword">Conferma nuova password</InputLabel>
                    <Input type="password" id="confirmNewPassword" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} required/>
                </FormControl>
                <Button variant="contained" type="submit">Invia</Button>
            </Stack>
        </Box>
    )
}