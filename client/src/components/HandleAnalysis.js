import {Box, Button, IconButton, Tooltip} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FormatListBulletedAddIcon from '@mui/icons-material/FormatListBulletedAdd';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import LinkIcon from '@mui/icons-material/Link';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function HandleAnalysis(){
    const exportPDF = () => {
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

    return(
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', gap: 3 }}>
            <IconButton id="icon">
                <StarIcon />
            </IconButton>
            <IconButton id="icon">
                <BookmarkIcon />
            </IconButton>
            <IconButton id="icon">
                <FormatListBulletedAddIcon />
            </IconButton>
            <Tooltip title="Esporta in PDF">
                <IconButton id="icon" onClick={exportPDF}>
                    <PictureAsPdfIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Convidi tramite link">
                <IconButton id="icon">
                    <LinkIcon />
                </IconButton>
            </Tooltip>
        </Box>
    )
}