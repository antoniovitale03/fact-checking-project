import {AppBar, Button, Toolbar} from "@mui/material";
import {Link} from "react-router-dom";

export default function Footer(){
    return(
        <AppBar position="static" sx={{ backgroundColor: '#077187' }}>
            <Toolbar sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", gap: '2vw' }}>
                <Button component={Link} to="/about">
                    About
                </Button>
            </Toolbar>
            <p>© "nome progetto" {new Date().getFullYear()} Limited. All rights reserved.</p>
        </AppBar>
    )
}