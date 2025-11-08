import {AppBar, Button, IconButton, Toolbar} from "@mui/material";
import {Link} from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer(){
    return(
        <AppBar position="static" sx={{ backgroundColor: '#077187' }}>
            <Toolbar sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", gap: '2vw' }}>
                <Button component={Link} to="/about">
                    About
                </Button>
                <IconButton component={Link} to="https://github.com/antoniovitale03/fact-checking-project" target="_blank" rel="noreferrer">
                    <GitHubIcon />
                </IconButton>
            </Toolbar>
            <p>© "nome progetto" {new Date().getFullYear()} Limited. All rights reserved.</p>
        </AppBar>
    )
}