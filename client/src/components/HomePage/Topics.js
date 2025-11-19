import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import {useEffect} from "react";
import api from "../../api";

export default function Topics(){
    useDocumentTitle("Le mie ricerche tematiche");

    useEffect(() => {
        api.get(`${process.env.REACT_APP_SERVER}/api/user/topics/get-topics`)
            .then(res => console.log(res)).catch(err => console.log(err))
    })

    return(
        <p>
            lista di tutte le analisi tematiche che l'utente ha salvato (ottenute tramite ricerca
            con parole chiave).
            l'utente può filtrare i risultati per tema specifico tipo guerra o immigrazione e trovare
            tutte le analisi salvate su quel tema.
            Lista di topicCard (ognuno punta a TopicPage)
            SOLO SE L'UTENTE è LOGGATO
        </p>
    )
}