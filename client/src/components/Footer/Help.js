import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import {useState} from "react";
import "../../CSS/Form.css";

export default function Help(){
    useDocumentTitle("Help");

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return(
        <Box className="page-content">
            <Box component="form">
                <Stack spacing={10}>
                    <Typography variant="h4" sx={{ textAlign: 'center' }}>Contattaci</Typography>
                    <TextField label="La tua email" type="email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <TextField label="Messaggio" type="text" rows={10} value={message} onChange={(e) => setMessage(e.target.value)}  />
                    <Button variant="contained">Invia</Button>
                </Stack>
            </Box>

        </Box>
    )
}