import {Box} from "@mui/material";
import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import PersonalStatistics from "./PersonalStatistics";
import EducativeAdvices from "./EducativeAdvices";
import Carosello from "../Carosello";

export default function Profile() {
    useDocumentTitle("Profile");
    return(
        <Box>
            <Carosello title="Ultimi articoli analizzati" />
            <Carosello title="Ultime ricerche tematiche fatte" />

            <Carosello title="Articoli preferiti" />
            <Carosello title="Tematiche preferite" />

            <PersonalStatistics />

            <EducativeAdvices />



        </Box>
    )
}