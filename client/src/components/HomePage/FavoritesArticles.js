import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import {useEffect, useState} from "react";
import api from "../../api";
import {Grid, Stack, Typography} from "@mui/material";
import ArticleCard from "../Cards/ArticleCard";

export default function FavoritesArticles(){
    useDocumentTitle("I miei articoli preferiti");

    const [favoriteArticles, setFavoriteArticles] = useState([1,2,3,4,4,5,1,2,4,22,1,23,2]);

    useEffect(() => {
        api.get(`${process.env.REACT_APP_SERVER}/api/user/favorites/get-articles`)
            .then(res => console.log(res)).catch(err => console.log(err))
    })

    return(
        <Stack spacing={2}>
            <Typography variant="h4">I miei articoli preferiti</Typography>
            <Grid container spacing={2}>
                {
                    favoriteArticles.map( e =>
                    <Grid size={2}>
                        <ArticleCard />
                    </Grid>
                    )
                }
            </Grid>
        </Stack>
    )
}