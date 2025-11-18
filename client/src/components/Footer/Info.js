import {Accordion, AccordionDetails, AccordionSummary, Stack, Typography} from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import {faqs} from "./faqs";
import {useState} from "react";
import QAFilter from "./QAFilter";

export default function Info(){
    useDocumentTitle("Info");

    const [Faqs, setFaqs] = useState(faqs);

    const cancelSearch = e => {
        e.preventDefault();
        setFaqs(faqs);
    }

    return(
        <Stack spacing={3}>
            <Typography variant="h4">Q&A</Typography>
            <QAFilter Faqs={Faqs} setFaqs={setFaqs} cancelSearch={cancelSearch} />
            {
                Faqs.map((faq, index) =>
                    <Accordion key={index}>
                        <AccordionSummary expandIcon={<ArrowDropDownIcon />}><strong>{faq.question}</strong></AccordionSummary>
                        <AccordionDetails>{faq.answer}</AccordionDetails>
                    </Accordion>
                )
            }
        </Stack>
    )
}