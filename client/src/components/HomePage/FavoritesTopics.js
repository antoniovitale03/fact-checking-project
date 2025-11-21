import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import {useEffect, useState} from "react";
import api from "../../api";
import {Grid, Stack, Typography} from "@mui/material";
import TopicCard from "../Cards/TopicCard";

export default function FavoritesTopics() {
    useDocumentTitle("Le mie ricerche tematiche preferite");

    const [favoritesTopics, setFavoritesTopics] = useState([1,2,344,5,2,4,5,2,4,5]);

    useEffect(() => {
        api.get(`${process.env.REACT_APP_SERVER}/api/user/favorites/get-topics`)
            .then(res => console.log(res)).catch(err => console.log(err))
    })

    return(
        <Stack spacing={2}>
            <Typography variant="h4">Le mie ricerche tematiche preferite</Typography>
            <Grid container spacing={2}>
                {
                    favoritesTopics.map((e) =>
                        <Grid size={2}>
                            <TopicCard />
                        </Grid>
                    )
                }
            </Grid>
        </Stack>
    )
}