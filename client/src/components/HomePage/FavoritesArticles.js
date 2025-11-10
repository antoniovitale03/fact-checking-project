import {useDocumentTitle} from "../../hooks/useDocumentTitle";

export default function FavoritesArticles(){
    useDocumentTitle("I miei articoli preferiti");
    return(
        <p>articoli salvati nei preferiti (articlecards)</p>
    )
}