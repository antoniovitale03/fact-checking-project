import {useState} from "react";
import {Box} from "@mui/material";
import "../../CSS/Form.css";
import RegistrationForm from "./RegistrationForm";
import VerificationCodeForm from "../VerificationCodeForm";

export default function HandleRegistration() {

    const [step, setStep] = useState(1); // 1 -> inserimento dati, 2 -> codice di verifica
    return(
        <Box className="sfondo">
            <Box className="form-container">
                {
                    step === 1 ? <RegistrationForm />
                        : <VerificationCodeForm />
                }
            </Box>
        </Box>
    )
}