import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from '@mui/icons-material/Person';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import TopicIcon from '@mui/icons-material/Topic';
import BoltIcon from '@mui/icons-material/Bolt';
import StarIcon from '@mui/icons-material/Star';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import {Avatar, Box, Divider, ListItemIcon, MenuItem} from "@mui/material";
import {Link} from "react-router-dom";
import DropDownMenu from "../DropDownMenu";
import {useState} from "react";

export default function UserMenu(){
    const [anchorEl, setAnchorEl] = useState(null);

    const closeMenu = () => setAnchorEl(null);

    const handleLogout = () => {
        setAnchorEl(null);
    }

    const menuItems = [
        {link: '/', name: 'Home', icon: <HomeIcon /> },
        {link: '/profile', name: 'Il mio profilo', icon: <PersonIcon /> },
        {link: '/lists', name: 'Le mie liste', icon: <FormatListBulletedIcon /> },
        {link: '/articles', name: 'I miei articoli', icon: <NewspaperIcon /> },
        {link: '/topics', name: 'Le mie ricerche tematiche', icon: <TopicIcon /> },
        {link: '/activity', name: 'Le mie attività', icon: <BoltIcon /> },
        <Divider key={134}><strong>Preferiti</strong></Divider>,
        {link: '/favorites-articles', name: 'I miei articoli preferiti', icon: <StarIcon /> },
        {link: '/favorites-topics', name: 'I miei topics preferiti', icon: <StarIcon /> },
        <Divider key={193}><strong>Impostazioni</strong></Divider>,
        {link: '/modify-profile', name: 'Modifica il profilo', icon: <SettingsIcon /> },
        {link: '/delete-account', name: 'Elimina il tuo account', icon: <SettingsIcon /> },
        <Divider key={33} />,
        <MenuItem key={129} onClick={handleLogout}>
            <ListItemIcon><LogoutIcon /></ListItemIcon>LOGOUT
        </MenuItem>
    ]


    const menu =
        <Box>
            {
                menuItems.map((item, index) => {
                if (item.link){
                    return (
                        <MenuItem component={Link} key={index} to={item.link} onClick={closeMenu} >
                            <ListItemIcon>{item.icon}</ListItemIcon>{item.name}
                        </MenuItem>
                    )
                }else return item
            })}
        </Box>


    return(
        <DropDownMenu buttonContent={<Avatar />} menuContent={menu} anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    )
}