import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import {useState} from "react";
import "../../CSS/form.css";
import {useNotification} from "../../context/notificationContext";
import SendIcon from '@mui/icons-material/Send';

export default function Help(){
    useDocumentTitle("Help");
    const {showNotification} = useNotification();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        showNotification("Il tuo messaggio è stato inviato. Avrai una risposta nelle prossime 24/28 ore", "success");
        setEmail("");
        setMessage("");
    }

    return(
        <Box className="page-content">
            <Stack component="form" spacing={7} onSubmit={handleSubmit}>
                <Typography variant="h4" sx={{ textAlign: 'center' }}>Contattaci</Typography>
                <TextField label="Nome" type="text" variant="outlined" value={name} onChange={ e => setName(e.target.value)} />
                <TextField label="Email" type="email" variant="outlined" value={email} onChange={e => setEmail(e.target.value)} />
                <TextField label="Titolo" type="text" variant="outlined" value={title} onChange={e => setTitle(e.target.value)} />
                <TextField label="Descrizione del problema" type="text" multiline rows={10} value={message} onChange={e => setMessage(e.target.value)}  />
                <Button variant="contained" type="submit" endIcon={ <SendIcon />}>Invia</Button>
            </Stack>
        </Box>
    )
}