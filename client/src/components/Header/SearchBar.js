import {Box, IconButton, TextField} from "@mui/material";
import {useState} from "react";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar(){

    const [query, setQuery] = useState("");

    const handleSearch = async (event) => {
        event.preventDefault();
        setQuery("");
    }

    return(
        <Box component="form" onSubmit={handleSearch} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <TextField type="search" placeholder="cerca per parole chiave o inserisce il link della notizia" value={query} onChange={ e  => setQuery(e.target.value) } sx={{ width: '30vw', gap: 1 }}  />
            <IconButton onClick={handleSearch}>
                <SearchIcon />
            </IconButton>
        </Box>
    )
}