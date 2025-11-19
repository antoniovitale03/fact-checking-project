import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import {useEffect} from "react";
import api from "../../api";

export default function Articles() {
    useDocumentTitle("I miei articoli");
    useEffect(() => {
        api.get(`${process.env.REACT_APP_SERVER}/api/user/articles/get-articles`)
            .then(res => console.log(res)).catch(err => console.log(err))
    })

    return(
        <p>
            lista di tutti gli articoli che l'utente ha analizzato e salvato (ricercati tramite URL).
            l'utente può filtrare i risultati per tema specifico tipo guerra o immigrazione e trovare
            tutte gli articoli salvati su quel tema.
            Lista di ArticleCard (ognuno punta ad ArticlePage)
            SOLO SE L'UTENTE è LOGGATO

        </p>
    )
}