import {Box, IconButton, TextField} from "@mui/material";
import {useState} from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function CreateNewListForm({createNewList}){

    const [listName, setListName] = useState("");

    return(
        <Box component="form" sx={{ display: 'flex', flexDirection: 'row' }} onSubmit={() => createNewList(listName)}>
            <TextField type="text" placeholder="Inserisci il nome della lista" value={listName}
                       onChange={e => setListName(e.target.value)} sx={{ width: '30vw', gap: 1 }} autoFocus />
            <IconButton onClick={() => createNewList(listName)}>
                <SearchIcon />
            </IconButton>
        </Box>
    )
}