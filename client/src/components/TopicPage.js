import {Button} from "@mui/material";

export default function TopicPage(){

    const exportPDF = () => {}
    return(
        <p>
            mostra tutte le informazioni ottenute dall'analisi di un topic (ricerca dell'utente tramite
            parole chiave) -> quando l'utente ha salvato quella analisi

            possibilità di salvare l'analisi come PDF
            <Button onClick={exportPDF} variant="contained">Esposta in PDF</Button>
        </p>
    )
}