import {useDocumentTitle} from "../hooks/useDocumentTitle";
import {Box} from "@mui/material";

export default function ActivityFeed() {
    useDocumentTitle("Le mie attività");
    return(
        <Box>
            breve timeline delle azioni recenti dell’utente. (lista di activityCard)
            Esempio:
            hai salvato l'analisi per questa ricerca tematica "elezione sindaco new york"
            hai salvato l'analisi per questo articolo "Titolo Articolo"
        </Box>
    )
}