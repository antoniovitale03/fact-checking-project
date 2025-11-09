import HomeIcon from "@mui/icons-material/Home";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import TopicIcon from '@mui/icons-material/Topic';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Avatar, Box, Divider, ListItemIcon, MenuItem} from "@mui/material";
import {Link} from "react-router-dom";
import DropDownMenu from "../DropDownMenu";
import {useState} from "react";

export default function UserMenu(){
    const links = ["/", "/lists", "/articles", "/topics"];
    const names = ["Home", "Le mie liste", "I miei articoli", "Le mie ricerche tematiche"];
    const icons = [ <HomeIcon />, <FormatListBulletedIcon />, <NewspaperIcon />, <TopicIcon />];


    const [anchorEl, setAnchorEl] = useState(null);

    const closeMenu = () => setAnchorEl(null);

    const handleLogout = () => {}

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