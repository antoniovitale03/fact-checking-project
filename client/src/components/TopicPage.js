import {Button} from "@mui/material";
import {useEffect} from "react";
import api from "../api";

export default function TopicPage(){

    const exportPDF = () => {}

    useEffect(() => {
        api.get(`${process.env.REACT_APP_SERVER}/api/user/topics/get-topic/54`)
            .then(res => console.log(res)).catch(err => console.log(err));
    })
    return(
        <p>
            mostra tutte le informazioni ottenute dall'analisi di un topic (ricerca dell'utente tramite
            parole chiave) -> quando l'utente ha salvato quella analisi

            possibilità di salvare l'analisi come PDF
            <Button onClick={exportPDF} variant="contained">Esposta in PDF</Button>
        </p>
    )
}