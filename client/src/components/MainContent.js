import {Container} from "@mui/material";
import Home from "../components/HomePage/Home";
import {Route, Routes} from "react-router-dom";
import KeywordsResults from "./SearchResults/SearchWithKeyword/KeywordsResults";
import LinkResults from "./SearchResults/SearchWithUrl/LinkResults";
import Articles from "./HomePage/Articles";
import Topics from "./HomePage/Topics";

import About from "./Footer/About";
import Info from "../components/Footer/Info";
import Credits from "./Footer/Credits";
import Help from "./Footer/Help";
import Lists from "./Lists";
import FavoritesArticles from "./HomePage/FavoritesArticles";
import FavoritesTopics from "./HomePage/FavoritesTopics";
import ActivityFeed from "./ActivityFeed";
import Profile from "./ProfilePage/Profile";


export default function MainContent(){
    return (
        <Container style={{ flexGrow: 1, maxWidth: '90vw', marginTop: '5vw', marginBottom: '5vw' }}>
            <Routes>
                {/*user menu*/}
                <Route path="/" element={ <Home /> } />
                <Route path="/profile" element={ <Profile /> } />
                <Route path="/lists" element={ <Lists /> } />
                <Route path="/articles" element={ <Articles /> } />
                <Route path="/topics" element={ <Topics /> } />
                <Route path="/activity" element={ <ActivityFeed /> } />

                <Route path="/analyze/keywords" element={ <KeywordsResults /> } />
                <Route path="/analyze/link" element={ <LinkResults /> } />

                <Route path="/favorites-articles" element={ <FavoritesArticles /> } />
                <Route path="/favorites-topics" element={ <FavoritesTopics /> } />

                {/*Footer*/}
                <Route path="/about" element={ <About /> } />
                <Route path="/info" element={ <Info /> } />
                <Route path="/credits" element={ <Credits /> } />
                <Route path="/help" element={ <Help /> } />
            </Routes>
        </Container>
    )
}