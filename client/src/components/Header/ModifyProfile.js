import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import "../../CSS/form.css";
import {useState} from "react";
import api from "../../api";

export default function ModifyProfile(){

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [biography, setBiography] = useState("");

    const handleModifyProfile = e => {
        e.preventDefault();
        api.post(`${process.env.REACT_APP_SERVER}/api/settings/modify-profile`)
            .then(res => console.log(res)).catch(err => console.log(err));
    }
    return (
        <Box className="page-content">
            <Stack spacing={7} component="form" onSubmit={handleModifyProfile}>
                <Typography variant="h4" sx={{ textAlign: 'center' }}>Modifica il tuo profilo</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }} >{/*nome e cognome*/}
                    <TextField label="Nome" variant="outlined" value={name} onChange={e => setName(e.target.value)} />
                    <TextField label="Cognome" variant="outlined" value={surname} onChange={e => setSurname(e.target.value)} />
                </Box>
                <TextField label="Email" variant="outlined" value={email} onChange={e => setEmail(e.target.value)} />
                <TextField label="Password" variant="outlined" value={password} onChange={e => setPassword(e.target.value)} />
                <TextField label="Biografia" variant="outlined" multiline rows={10} value={biography} onChange={e => setBiography(e.target.value)} />
                <Button type="submit" variant="contained">Invia le modifiche</Button>
            </Stack>
        </Box>
    )
}