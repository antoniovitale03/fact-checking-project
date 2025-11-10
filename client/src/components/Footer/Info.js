import {Accordion, AccordionDetails, AccordionSummary, Box, Stack} from "@mui/material";
import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import {faqs} from "../faqs";

export default function Info(){
    useDocumentTitle("Info");
    return(
        <Stack spacing={1}>
            {
                faqs.map((faq, index) =>
                    <Accordion key={index}>
                        <AccordionSummary><strong>{faq.question}</strong></AccordionSummary>
                        <AccordionDetails>{faq.answer}</AccordionDetails>
                    </Accordion>
                )
            }
        </Stack>
    )
}