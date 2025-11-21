import {Box, Grid, Stack, Typography} from "@mui/material";
import {useDocumentTitle} from "../hooks/useDocumentTitle";
import {useEffect, useState} from "react";
import api from "../api";
import CreateNewList from "./Header/CreateNewList";
import ListCard from "./Cards/ListCard";

export default function Lists(){
    useDocumentTitle("Le mie liste");

    const [lists, setLists] = useState([1,2,3,4,5,6,7,8,9,10]);

    useEffect(() => {
        api.get(`${process.env.REACT_APP_SERVER}/api/user/lists/get-lists`)
            .then(res => console.log(res)).catch(err => console.log(err))
    })

    return(
        <Stack spacing={2}>
            <Typography variant="h4">Le tue liste</Typography>
            <p>visualizza le info essenziali di ogni lista dell'utente,
                che raccoglie al suo interno più articlecard o topiccard
            </p>
            <CreateNewList />
            <Grid container spacing={2}>
                {
                    lists.map(e =>
                    <Grid size={2}>
                        <ListCard />
                    </Grid>
                    )
                }
            </Grid>
            pagina che mostra tutte le liste dell'utente (insieme di listCard)
            con la possibilità di rimuovere una o più liste con la X sulla card
        </Stack>
    )
}