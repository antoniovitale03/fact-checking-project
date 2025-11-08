import {Container} from "@mui/material";
import Home from "../components/HomePage/Home";
import {Route, Routes} from "react-router-dom";
import KeywordResults from "./SearchResults/SearchWithKeyword/KeywordResults";
import LinkResults from "./SearchResults/SearchWithUrl/LinkResults";

export default function MainContent(){
    return (
        <Container style={{ flexGrow: 1, maxWidth: '90vw', marginTop: '5vw', marginBottom: '5vw' }}>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/analyze/keywords" element={ <KeywordResults /> } />
                <Route path="/analyze/link" element={ <LinkResults /> } />
            </Routes>
        </Container>
    )
}