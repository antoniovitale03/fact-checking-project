import {useDocumentTitle} from "../../hooks/useDocumentTitle";

export default function Credits() {
    useDocumentTitle("Credits");
    return(
        <p>Fonti, dataset, librerie open source e modelli ML utilizzati.</p>
    )
}