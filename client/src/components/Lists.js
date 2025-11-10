import {Box} from "@mui/material";
import {useDocumentTitle} from "../hooks/useDocumentTitle";

export default function Lists(){
    useDocumentTitle("Le mie liste");
    return(
        <Box>
            pagina che mostra tutte le liste dell'utente (insieme di listCard)
            con la possibilità di rimuovere una o più liste con la X sulla card
        </Box>
    )
}