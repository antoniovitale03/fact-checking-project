import {useState} from "react";
import {Box} from "@mui/material";
import "../../CSS/form.css";
import VerificationCodeForm from "../VerificationCodeForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import LoginForm from "./LoginForm";
import {useDocumentTitle} from "../../hooks/useDocumentTitle";

export default function HandleLogin(){
    useDocumentTitle("Login");
    const [step, setStep] = useState(1); // 1 -> dati di login, 2 -> codice di verifica, 3-> impostazione nuova password

    const [email, setEmail] = useState("");

    return(
        <Box className="sfondo">
            <Box className="page-content">
                {
                    step === 1 ? <LoginForm setStep={setStep} email={email} setEmail={setEmail}  /> :
                        step === 2 ? <VerificationCodeForm /> :
                            step === 3 && <ForgotPasswordForm setStep={setStep} email={email} />
                }
            </Box>
        </Box>
    )
}