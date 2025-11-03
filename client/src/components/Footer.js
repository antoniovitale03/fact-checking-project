import {AppBar, Toolbar} from "@mui/material";

export default function Footer(){
    return(
        <AppBar position="static">
            <Toolbar sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", gap: '2vw' }}>
                <p>ciao1</p>
                <p>ciao2</p>
            </Toolbar>
        </AppBar>
    )
}