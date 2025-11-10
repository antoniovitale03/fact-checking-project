import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from '@mui/icons-material/Person';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import TopicIcon from '@mui/icons-material/Topic';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BoltIcon from '@mui/icons-material/Bolt';
import {Avatar, Box, Divider, ListItemIcon, MenuItem} from "@mui/material";
import {Link} from "react-router-dom";
import DropDownMenu from "../DropDownMenu";
import {useState} from "react";

export default function UserMenu(){
    const links = ["/", "/profile", "/lists", "/articles", "/topics", "/activity"];
    const names = ["Home", "Il mio profilo", "Le mie liste", "I miei articoli", "Le mie ricerche tematiche", "Le mie attività"];
    const icons = [ <HomeIcon />, <PersonIcon />,  <FormatListBulletedIcon />, <NewspaperIcon />, <TopicIcon />, <BoltIcon />];

    const [anchorEl, setAnchorEl] = useState(null);

    const closeMenu = () => setAnchorEl(null);

    const handleLogout = () => setAnchorEl(null); //poi aggiungo l'api per il logout

    const menu =
        <Box>
            {
                links.map((link, index) =>
                <MenuItem key={index} component={Link} to={links[index]} onClick={closeMenu}>
                    <ListItemIcon>{icons[index]}</ListItemIcon>{names[index]}
                </MenuItem>
            )}
            <Divider><strong>Preferiti</strong></Divider>
            <MenuItem component={Link} to="/favorites-articles" onClick={closeMenu}>
                <ListItemIcon><FavoriteIcon /></ListItemIcon>Articoli preferiti
            </MenuItem>
            <MenuItem component={Link} to="/favorites-topics" onClick={closeMenu}>
                <ListItemIcon><FavoriteIcon /></ListItemIcon>Tematiche preferite
            </MenuItem>
            <Divider />
            <MenuItem key={129} onClick={handleLogout}> LOGOUT </MenuItem>
        </Box>

    return(
        <DropDownMenu buttonContent={<Avatar />} menuContent={menu} anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    )
}