import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import "../../CSS/form.css";
import {useState} from "react";
import api from "../../api";

export default function DeleteAccount() {

    const [email, setEmail] = useState("");

    const handleDeleteAccount = e => {
        e.preventDefault();
        api.get(`${process.env.REACT_APP_SERVER}/api/settings/delete-account`)
            .then(res => console.log(res)).catch(err => console.log(err));
    };

    return(
        <Box className="page-content">
            <Stack spacing={7} component="form" onSubmit={handleDeleteAccount}>
                <Typography variant="h4" sx={{ textAlign: 'center' }}>Elimina il tuo account</Typography>
                <Typography variant="h6" sx={{ textAlign: 'center' }}>
                    Per eliminare il tuo account, inserisci prima la tua mail come verifica
                </Typography>
                <TextField label="Email" variant="outlined" value={email} onChange={e => setEmail(e.target.value)} required />
                <Button type="submit" variant="contained" color="primary">Invia</Button>
            </Stack>
        </Box>
    )
}

