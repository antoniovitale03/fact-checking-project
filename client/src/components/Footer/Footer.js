import {AppBar, Button, IconButton, Toolbar} from "@mui/material";
import {Link} from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer(){
    return(
        <AppBar position="static" sx={{ backgroundColor: '#0EB1D2' }}>
            <Toolbar sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", gap: '2vw' }}>
                <Button component={Link} to="/about" sx={{ color: 'black' }}>About</Button>
                <Button component={Link} to="/info" sx={{ color: 'black' }}>Info</Button>
                <Button component={Link} to="/credits" sx={{ color: 'black' }}>Credits</Button>
                <Button component={Link} to="/help" sx={{ color: 'black' }}>Help</Button>
                <IconButton component={Link} to="https://github.com/antoniovitale03/fact-checking-project" target="_blank" rel="noreferrer">
                    <GitHubIcon />
                </IconButton>
            </Toolbar>
            <p> © "nome progetto" {new Date().getFullYear()} Limited. All rights reserved.</p>
        </AppBar>
    )
}