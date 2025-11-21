import {Card, CardContent, IconButton, Tooltip} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export default function ArticleCard(){
    return(
        <Card sx={{ position: 'relative', overflow: 'visible' }}>

            <Tooltip title="Rimuovi articolo">
                <IconButton id="remove-icon" sx={{ position: 'absolute', top: -15, right: -15 }} >
                    <CloseIcon />
                </IconButton>
            </Tooltip>

            <CardContent>
                <p>titolo notizia</p>
                <p>nome della testata</p>
                <p>autore dell'articolo</p>
                <p>lista parametri principali</p>
                <p>data dell'analisi</p>
            </CardContent>
        </Card>
    )
}