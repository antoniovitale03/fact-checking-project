import {Box, Button} from "@mui/material";

export default function ArticlePage(){
    const exportPDF = () => {}

    return(
        <Box>
            pagina che mostra tutte le informazioni di analisi ottenute dalla ricerca
            della notizia tramite URL (quando l'utente ha salvato quella analisi)
            <Button onClick={exportPDF} variant="contained">Esposta in PDF</Button>
        </Box>
    )
}