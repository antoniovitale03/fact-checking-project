import {AppBar, Toolbar} from "@mui/material";

export default function Header(){
    return(
        <AppBar position="fixed">
           <Toolbar sx={{ display: "flex", flexDirection: 'row', justifyContent: "space-evenly", marginTop: '0.25vw'}}>
                   <p>ciao</p>
                   <p>ciao1</p>
                   <p>ciao2</p>
           </Toolbar>
        </AppBar>
    )
}