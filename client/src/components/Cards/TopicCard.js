import {Card, CardContent, IconButton, Tooltip} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function TopicCard(){
    return(
        <Card sx={{ position: 'relative', overflow: 'visible' }}>

            <Tooltip title="Rimuovi ricerca tematica">
                <IconButton id="remove-icon" sx={{ position: 'absolute', top: -15, right: -15 }} >
                    <CloseIcon />
                </IconButton>
            </Tooltip>

            <CardContent>
                <p>keyword</p>
                <p>lista dei vari parametri</p>
                <p>data dell'analisi</p>
            </CardContent>
        </Card>
    )
}