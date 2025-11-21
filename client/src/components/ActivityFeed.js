import {useDocumentTitle} from "../hooks/useDocumentTitle";
import {Box, Grid, Stack, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import api from "../api";
import ArticleCard from "./Cards/ArticleCard";
import ActivityCard from "./Cards/ActivityCard";

export default function ActivityFeed() {
    useDocumentTitle("Le mie attività");

    const [activities, setActivities] = useState([1,2,3,4]);

    useEffect(() => {
        api.get(`${process.env.REACT_APP_SERVER}/api/user/activities`)
            .then(res => console.log(res)).catch(err => console.log(err))
    })

    return(
        <Stack spacing={2}>
            <Typography variant="h4">Le mie attività</Typography>

            <p>breve timeline delle azioni recenti dell’utente. (lista di activityCard)
                Esempio:
                hai salvato l'analisi per questa ricerca tematica "elezione sindaco new york"
                hai salvato l'analisi per questo articolo "Titolo Articolo"
            </p>

            {
                activities.map( e => <ActivityCard />)
            }
        </Stack>
    )
}