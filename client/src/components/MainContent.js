import {Container} from "@mui/material";
import Home from "../components/HomePage/Home";
import {Route, Routes} from "react-router-dom";
import TopicAnalysis from "./SearchResults/SearchWithKeyword/TopicAnalysis";
import ArticleAnalysis from "./SearchResults/SearchWithUrl/ArticleAnalysis";
import Articles from "./HomePage/Articles";
import Topics from "./HomePage/Topics";

import About from "./Footer/About";
import QA from "./Footer/Q&A";
import Credits from "./Footer/Credits";
import Help from "./Footer/Help";
import Lists from "./Lists";
import FavoritesArticles from "./HomePage/FavoritesArticles";
import FavoritesTopics from "./HomePage/FavoritesTopics";
import ActivityFeed from "./ActivityFeed";
import Profile from "./ProfilePage/Profile";
import Archive from "./Header/Archive";
import ModifyProfile from "./Header/ModifyProfile";
import DeleteAccount from "./Header/DeleteAccount";

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

                <Route path="/analyze/keywords" element={ <TopicAnalysis /> } />
                <Route path="/analyze/link" element={ <ArticleAnalysis /> } />

                <Route path="/favorites-articles" element={ <FavoritesArticles /> } />
                <Route path="/favorites-topics" element={ <FavoritesTopics /> } />

                <Route path="/modify-profile" element={ <ModifyProfile /> } />
                <Route path="/delete-account" element={ <DeleteAccount /> } />

                <Route path="/archive" element={ <Archive /> } />

                {/*Footer*/}
                <Route path="/about" element={ <About /> } />
                <Route path="/Q&A" element={ <QA /> } />
                <Route path="/credits" element={ <Credits /> } />
                <Route path="/help" element={ <Help /> } />
            </Routes>
        </Container>
    )
}