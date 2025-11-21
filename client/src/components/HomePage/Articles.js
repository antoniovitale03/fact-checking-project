import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import {useEffect, useState} from "react";
import api from "../../api";
import {Box, Grid, Stack, Typography} from "@mui/material";
import ArticleCard from "../Cards/ArticleCard";

export default function Articles() {

    const [articles, setArticles] = useState([1,2,3,4]);

    useDocumentTitle("I miei articoli");
    useEffect(() => {
        api.get(`${process.env.REACT_APP_SERVER}/api/user/articles/get-articles`)
            .then(res => console.log(res)).catch(err => console.log(err))
    })

    return(
        <Stack spacing={5}>
            <Typography variant="h4">I miei articoli</Typography>

            <Grid container spacing={2}>

            {
                articles.map(e =>
                    <Grid size={2}>
                        <ArticleCard />
                    </Grid>
                )
            }
            </Grid>

            lista di tutti gli articoli che l'utente ha analizzato e salvato (ricercati tramite URL).
            l'utente può filtrare i risultati per tema specifico tipo guerra o immigrazione e trovare
            tutte gli articoli salvati su quel tema.
            Lista di ArticleCard (ognuno punta ad ArticlePage)

        </Stack>
    )
}