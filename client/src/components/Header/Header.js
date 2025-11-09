import {AppBar, Avatar, IconButton, Toolbar} from "@mui/material";
import {useNavigate} from "react-router-dom";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";

export default function Header(){
    const navigate = useNavigate();
    return(
        <AppBar position="fixed" sx={{ backgroundColor: '#0EB1D2' }}>
           <Toolbar sx={{ display: "flex", flexDirection: 'row', justifyContent: "space-evenly", alignContent: 'center' }}>
               <UserMenu />
               <SearchBar />
               <IconButton onClick={ () => navigate("/") }>
                   <Avatar />
               </IconButton>
           </Toolbar>
        </AppBar>
    )
}