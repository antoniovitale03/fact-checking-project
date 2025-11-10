import {useDocumentTitle} from "../../hooks/useDocumentTitle";

export default function Topics(){
    useDocumentTitle("Le mie ricerche tematiche");
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