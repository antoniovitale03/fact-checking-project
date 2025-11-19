import {Box} from "@mui/material";
import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import PersonalStatistics from "./PersonalStatistics";
import EducativeAdvices from "./EducativeAdvices";
import Carosello from "../Carosello";
import {useEffect} from "react";
import api from "../../api";

export default function Profile() {
    useDocumentTitle("Profile");

    useEffect(() => {
        api.get(`${process.env.REACT_APP_SERVER}/api/user/profile`)
            .then(res => console.log(res)).catch(err => console.log(err));
    })

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