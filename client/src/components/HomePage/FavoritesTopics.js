import {useDocumentTitle} from "../../hooks/useDocumentTitle";

export default function FavoritesTopics() {
    useDocumentTitle("Le mie ricerche tematiche preferite");
    return(
        <p>topic salvati nei preferiti</p>
    )
}