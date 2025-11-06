import {AppBar, Avatar, IconButton, Toolbar} from "@mui/material";
import {useNavigate} from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header(){
    const navigate = useNavigate();
    return(
        <AppBar position="fixed" sx={{ backgroundColor: '#077187' }}>
           <Toolbar sx={{ display: "flex", flexDirection: 'row', justifyContent: "space-evenly", alignContent: 'center' }}>
                   <Avatar />
                   <SearchBar />
                    <IconButton onClick={ () => navigate("/") }>
                        <Avatar />
                    </IconButton>
           </Toolbar>
        </AppBar>
    )
}