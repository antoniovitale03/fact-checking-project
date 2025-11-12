import {useState} from "react";
import {Box} from "@mui/material";
import "../../CSS/Form.css";
import RegistrationForm from "./RegistrationForm";
import VerificationCodeForm from "../VerificationCodeForm";
import {useDocumentTitle} from "../../hooks/useDocumentTitle";

export default function HandleRegistration() {
    useDocumentTitle("Registration");

    const [step, setStep] = useState(1); // 1 -> inserimento dati, 2 -> codice di verifica
    const [email, setEmail] = useState("");

    return(
        <Box className="sfondo">
                {
                    step === 1 ? <RegistrationForm email={email} setEmail={setEmail} setStep={setStep} />
                        : <VerificationCodeForm />
                }
        </Box>
    )
}