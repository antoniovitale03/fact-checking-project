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
    const [anchorEl, setAnchorEl] = useState(null);

    const menuItems = [
        {link: '/', name: 'Home', icon: <HomeIcon /> },
        {link: '/profile', name: 'Il mio profilo', icon: <PersonIcon /> },
        {link: '/lists', name: 'Le mie liste', icon: <FormatListBulletedIcon /> },
        {link: '/articles', name: 'I miei articoli', icon: <NewspaperIcon /> },
        {link: '/topics', name: 'Le mie ricerche tematiche', icon: <TopicIcon /> },
        {link: '/activity', name: 'Le mie attività', icon: <BoltIcon /> },
    ]

    const closeMenu = () => setAnchorEl(null);

    const handleLogout = () => {
        setAnchorEl(null);
    }

    const menu =
        <Box>
            {
                menuItems.map((e, index) =>
                <MenuItem key={index} component={Link} to={e.link} onClick={closeMenu}>
                    <ListItemIcon>{e.icon}</ListItemIcon>{e.name}
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