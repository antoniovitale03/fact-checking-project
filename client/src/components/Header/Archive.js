import {Box} from "@mui/material";
import {useState} from "react";

export default function Archive(){

    const [archive, setArchive] = useState([1,2,3,4]);

    return(
        <Box>
            lista con topic e articoli e filtri di ricerca per solo topic, solo articoli o tutto, data, tema ecc.
        </Box>
    )
}