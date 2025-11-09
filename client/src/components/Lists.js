import {Box} from "@mui/material";
import DropDownMenu from "./DropDownMenu";
import CreateNewListForm from "./CreateNewListForm";
import AddIcon from '@mui/icons-material/Add';
import {useState} from "react";

export default function Lists(){

    const [anchorEl, setAnchorEl] = useState(null);
    const createNewList = (listName) => setAnchorEl(null);

    return(
        <Box>
            pagina che mostra tutte le liste dell'utente (insieme di listCard)
            con la possibilità di aggiungere/rimuovere una o più liste
            <DropDownMenu buttonContent={<><AddIcon />Crea una nuova lista</>}
                          menuContent={ <CreateNewListForm createNewList={createNewList} /> }
            anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
        </Box>
    )
}