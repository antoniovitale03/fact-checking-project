import {useSearchParams} from "react-router-dom";
import ArticleOverview from "./ArticleOverview";
import LanguageAnalysis from "./LanguageAnalysis";
import SourcesComparison from "./SourcesComparison";
import GeneralValutation from "./GeneralValutation";
import {Box, Button} from "@mui/material";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import jsPDF from "jspdf"; //Permette di creare PDF dinamici direttamente da testo e componenti HTML (anche grafici e immagini);
import html2canvas from "html2canvas";
import {useDocumentTitle} from "../../../hooks/useDocumentTitle";
import {useEffect} from "react";
import api from "../../../api"; //serve per catturare porzioni del DOM (grafici, card, ecc.) e convertirle in immagini da inserire nel PDF.


export default function LinkResults() {
    const link = useSearchParams()[0].get("link");
    useDocumentTitle(`Risultati per '${link}'`);


        const exportPDF = async () => {
            //const element = document.getElementById("analysis-content"); // ID del contenuto da esportare
            //             const canvas = await html2canvas(element, { scale: 2 });
            //             const imgData = canvas.toDataURL("image/png");
            //             const pdf = new jsPDF("p", "mm", "a4");
            //
            //             // Adatta l'immagine alla pagina PDF
            //             const imgProps = pdf.getImageProperties(imgData);
            //             const pdfWidth = pdf.internal.pageSize.getWidth();
            //             const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            //
            //             pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            //             pdf.save("analisi_factlens.pdf");
        }

    useEffect(() =>{
            api.post(`${process.env.REACT_APP_SERVER}/api/analyze/topic`)
                .then(res => console.log(res)).catch(err => console.log(err));
        }
    )
    return (
        <Box>{link}
                componente che mostra i risultati della ricerca fatta dall'utente, nel caso inserisca direttamente
            il link della notizia, quindi l'app analizza nello specifico la notizia
            Struttura:

            <ArticleOverview />
            <LanguageAnalysis />
            <SourcesComparison />
            <GeneralValutation />
            possibilità di salvare l'analisi per poterla aggiungere alla cronologia degli articoli analizzati
                (articles) e di salvarla in una lista personalizzata o nei preferiti
            <Button startIcon={<PictureAsPdfIcon />} onClick={exportPDF} variant="contained">Esposta in PDF</Button>
        </Box>
    )
}