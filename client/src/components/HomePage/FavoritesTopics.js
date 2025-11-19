import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import {useEffect} from "react";
import api from "../../api";

export default function FavoritesTopics() {
    useDocumentTitle("Le mie ricerche tematiche preferite");
    useEffect(() => {
        api.get(`${process.env.REACT_APP_SERVER}/api/user/favorites/get-topics`)
            .then(res => console.log(res)).catch(err => console.log(err))
    })
    return(
        <p>topic salvati nei preferiti</p>
    )
}