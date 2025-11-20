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

    const handleSearch = e => {
        e.preventDefault();
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
        <Box component="form" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} onSubmit={handleSearch}>
            <TextField type="search" placeholder="Cerca tramite link o parole chiave" sx={{ width: '30vw', gap: 1 }} value={query} onChange={ e  => setQuery(e.target.value) }  />
            <IconButton id="icon" onClick={handleSearch}>
                <SearchIcon />
            </IconButton>
        </Box>
    )
}