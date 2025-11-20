import {Box, Typography} from "@mui/material";
import {useDocumentTitle} from "../hooks/useDocumentTitle";
import {useEffect} from "react";
import api from "../api";
import CreateNewList from "./Header/CreateNewList";

export default function Lists(){
    useDocumentTitle("Le mie liste");

    useEffect(() => {
        api.get(`${process.env.REACT_APP_SERVER}/api/user/lists/get-lists`)
            .then(res => console.log(res)).catch(err => console.log(err))
    })

    return(
        <Box>
            <Typography component="h3">Le tue liste</Typography>
            <CreateNewList />
            pagina che mostra tutte le liste dell'utente (insieme di listCard)
            con la possibilità di rimuovere una o più liste con la X sulla card
        </Box>
    )
}