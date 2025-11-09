import {useDocumentTitle} from "../../hooks/useDocumentTitle";

export default function Help(){
    useDocumentTitle("Help");
    return(
        <p>Pagina con un form di contatto con cui l'utente può inviare una email di supporto</p>
    )
}