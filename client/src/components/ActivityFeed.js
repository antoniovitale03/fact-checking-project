import {useDocumentTitle} from "../hooks/useDocumentTitle";
import {Box} from "@mui/material";
import {useEffect} from "react";
import api from "../api";

export default function ActivityFeed() {
    useDocumentTitle("Le mie attività");

    useEffect(() => {
        api.get(`${process.env.REACT_APP_SERVER}/api/user/activities`)
            .then(res => console.log(res)).catch(err => console.log(err))
    })

    return(
        <Box>
            breve timeline delle azioni recenti dell’utente. (lista di activityCard)
            Esempio:
            hai salvato l'analisi per questa ricerca tematica "elezione sindaco new york"
            hai salvato l'analisi per questo articolo "Titolo Articolo"
        </Box>
    )
}