import {Box, IconButton, TextField} from "@mui/material";
import {useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import DropDownMenu from "../DropDownMenu";
import api from "../../api";

export default function CreateNewList(){

    const [listName, setListName] = useState("");

    const [anchorEl, setAnchorEl] = useState(null);

    const createNewList = () =>  {
        setAnchorEl(null);
        setListName("");
        api.post(`${process.env.REACT_APP_SERVER}/api/user/lists/add-list`)
            .then(res => console.log(res)).catch(err => console.log(err));
    }

    const menu =
        <Box component="form" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} onSubmit={createNewList}>
        <TextField type="text" placeholder="Inserisci il nome della lista" value={listName}
                   onChange={e => setListName(e.target.value)} sx={{ width: '15vw', gap: 1 }} autoFocus />
        <IconButton id="icon" onClick={createNewList}>
            <AddIcon />
        </IconButton>
    </Box>

    return(
        <DropDownMenu buttonContent={<><AddIcon />Crea una nuova lista</>}
                      menuContent={menu}
                      anchorEl={anchorEl}
                      setAnchorEl={setAnchorEl} />

    )
}