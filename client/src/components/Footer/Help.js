import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import {useState} from "react";
import "../../CSS/form.css";
import {useNotification} from "../../context/notificationContext";

export default function Help(){
    useDocumentTitle("Help");
    const {showNotification} = useNotification();

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        showNotification("Il tuo messaggio è stato inviato. Avrai una risposta nelle prossime 24/28 ore", "success");
        setEmail("");
        setMessage("");
    }

    return(
        <Box className="page-content">
            <Stack component="form" spacing={10} onSubmit={handleSubmit} >
                <Typography variant="h4" sx={{ textAlign: 'center' }}>Contattaci</Typography>
                <TextField label="La tua email" type="email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextField label="Messaggio" type="text" rows={10} value={message} onChange={(e) => setMessage(e.target.value)}  />
                <Button variant="contained" type="submit">Invia</Button>
            </Stack>
        </Box>
    )
}