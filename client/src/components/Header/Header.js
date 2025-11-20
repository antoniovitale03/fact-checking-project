import {AppBar, Avatar, IconButton, Toolbar, Tooltip} from "@mui/material";
import HistoryIcon from '@mui/icons-material/History';
import {useNavigate} from "react-router-dom";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";
import CreateNewList from "./CreateNewList";

export default function Header(){
    const navigate = useNavigate();
    return(
        <AppBar position="fixed" sx={{ backgroundColor: '#0EB1D2' }}>
           <Toolbar sx={{ display: "flex", flexDirection: 'row', justifyContent: "space-evenly", alignContent: 'center' }}>
               <UserMenu />
               <IconButton id="icon" onClick={ () => navigate("/archive") }>
                   <Tooltip title="Archivio">
                       <HistoryIcon />
                   </Tooltip>
               </IconButton>
               <SearchBar />
               <CreateNewList />
               <IconButton id="icon" onClick={ () => navigate("/") }>
                   <Tooltip title="Home">
                       <Avatar />
                   </Tooltip>
               </IconButton>
           </Toolbar>
        </AppBar>
    )
}