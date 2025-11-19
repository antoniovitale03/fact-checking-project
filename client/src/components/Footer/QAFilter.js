import {Box, IconButton, TextField, Tooltip} from "@mui/material";
import {useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';

export default function QAFilter({Faqs, setFaqs, cancelSearch}){
    const [query, setQuery] = useState("");
    const [closeIcon, setCloseIcon] = useState(false);

    const handleSearch = e => {
        e.preventDefault();
        setCloseIcon(true);
        setQuery("");
        setFaqs(Faqs.filter(faq => faq.question.toLowerCase().includes(query.toLowerCase())));
    }

    return(
        <Box component="form" onSubmit={handleSearch} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
            {
                closeIcon &&
                <Tooltip title="Annulla ricerca">
                    <IconButton onClick={cancelSearch} id="remove-icon" sx={{ color: 'black' }}>
                        <CloseIcon />
                    </IconButton>
                </Tooltip>
            }

            <TextField type="search" placeholder="Cerca per parole chiave" value={query} onChange={ e => setQuery(e.target.value) } sx={{ width: '30vw' }} />
            <IconButton onClick={handleSearch}>
                <SearchIcon />
            </IconButton>
        </Box>
    )
}