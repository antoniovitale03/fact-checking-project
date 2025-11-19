import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import {useEffect} from "react";
import api from "../../api";

export default function FavoritesArticles(){
    useDocumentTitle("I miei articoli preferiti");
    useEffect(() => {
        api.get(`${process.env.REACT_APP_SERVER}/api/user/favorites/get-articles`)
            .then(res => console.log(res)).catch(err => console.log(err))
    })
    return(
        <p>articoli salvati nei preferiti (articlecards)</p>
    )
}