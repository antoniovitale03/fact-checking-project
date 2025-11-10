import {useState} from "react";
import {Box} from "@mui/material";
import "../../CSS/Form.css";
import VerificationCodeForm from "../VerificationCodeForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import LoginForm from "./LoginForm";

export default function HandleLogin(){
    const [step, setStep] = useState(1); // 1 -> dati di login, 2 -> codice di verifica, 3-> impostazione nuova password

    return(
        <Box className="sfondo">
            <Box className="form-container">
                {
                    step === 1 ? <LoginForm /> :
                        step === 2 ? <VerificationCodeForm /> :
                            step === 3 && <ForgotPasswordForm />
                }
            </Box>
        </Box>
    )
}