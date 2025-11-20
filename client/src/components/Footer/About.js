import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import {Box} from "@mui/material";
import Why from "./Why";

export default function About(){
    useDocumentTitle("About");
    return(
        <Box>
            <p>mostro tutte le informazioni del progetto e delle card che mostrano le funzionalità principali del sito
                (es. confronta fonti, analizza notizia, ecc.)
                Indichiamo anche come funziona il sito, con una spiegazione del processo e flusso di utilizzo
                (tipo: raccolta → analisi → visualizzazione → educazione)
            </p>
            <Why />
        </Box>

    )
}