import {Box, IconButton, TextField} from "@mui/material";
import {useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from "react-router-dom";

export default function SearchBar(){

    const navigate = useNavigate();
    const [query, setQuery] = useState("");


    // funzione per capire se la query è un URL o meno (parole chiave)
    const isValidUrl = (query) => {
        try {
            new URL(query);
            return true;
        } catch (error) {
            return false;
        }
    };

    const handleSearch = event => {
        event.preventDefault();
        const param = new URLSearchParams();
        if(isValidUrl(query)){
            param.append("link", query);
            navigate(`/analyze/link?${param.toString()}`);
        }else{
            param.append("keywords", query);
            navigate(`/analyze/keywords?${param.toString()}`);
        }
        setQuery("");
    }

    return(
        <Box component="form" onSubmit={handleSearch} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <TextField type="search" placeholder="Inserisci un link o delle parole chiave" value={query} onChange={ e  => setQuery(e.target.value) } sx={{ width: '30vw', gap: 1 }}  />
            <IconButton onClick={handleSearch}>
                <SearchIcon />
            </IconButton>
        </Box>
    )
}