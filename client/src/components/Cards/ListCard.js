import {Card, CardContent, IconButton, Tooltip} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function ListCard(){
    return(
        <Card sx={{ position: "relative", overflow: 'visible' }}>
            <Tooltip title="Rimuovi la lista">
                <IconButton id="remove-icon" sx={{ position: 'absolute', top: -15, right: -15 }} >
                    <CloseIcon />
                </IconButton>
            </Tooltip>

            <CardContent>
                <p>Nome lista</p>
                <p>eventuale immagine</p>
                <p>Numero elementi totali (X articoli, Y topics)</p>
                <p>data creazione</p>
            </CardContent>
        </Card>
    )
}