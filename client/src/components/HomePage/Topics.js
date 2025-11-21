import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import {useEffect, useState} from "react";
import api from "../../api";
import {Grid, Stack, Typography} from "@mui/material";
import TopicCard from "../Cards/TopicCard";

export default function Topics(){
    useDocumentTitle("Le mie ricerche tematiche");

    const [topics, setTopics] = useState([1,3,4,5]);

    useEffect(() => {
        api.get(`${process.env.REACT_APP_SERVER}/api/user/topics/get-topics`)
            .then(res => console.log(res)).catch(err => console.log(err))
    })

    return(
        <Stack spacing={10}>
            <Typography variant="h4">Le mie ricerche tematiche</Typography>
            <p>l'utente può filtrare i risultati per tema specifico tipo guerra o immigrazione e trovare
                tutte le analisi salvate su quel tema.</p>
            <Grid container spacing={2}>
                {
                    topics.map(e =>
                    <Grid size={2}>
                        <TopicCard />
                    </Grid>
                    )
                }
            </Grid>


        </Stack>
    )
}