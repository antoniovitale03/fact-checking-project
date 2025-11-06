import {Container} from "@mui/material";

export default function MainContent(){
    return (
        <Container style={{ flexGrow: 1, maxWidth: '90vw', marginTop: '5vw', marginBottom: '5vw' }}>
            <p>main content</p>
        </Container>
    )
}