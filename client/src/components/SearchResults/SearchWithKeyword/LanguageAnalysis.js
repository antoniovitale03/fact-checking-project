import {Box} from "@mui/material";

export default function LanguageAnalysis() {
    return(
        <Box>
            <h1>Analisi linguistica</h1>
            <p>descrizione generale del tema2–3 frasi generate dal modello</p>
            <p>concetti chiave ricorrenti (keywords estratte dagli articoli)</p>

            <h2>sentiment generale del topic (es. positivo per 3 articoli, neutro per 10, negativo per 4)</h2>
            <p>grafico a bare che mostra % articoli positivi, negativi, neutri</p>
            <p>principali emozioni rilevate</p>

            <h2>polarizzazione del tema (polarization score del tema)</h2>
            <p>analisi di polarizzazione per tutti gli articoli per poi calcolarne la media</p>
            <p>mostro le testate con polarizzazione più alta</p>

            <h2>trovo i bias più ricorrenti (in percentuale sul totale degli articoli):</h2>
            <p>sensazionalismo (45%)</p>
            <p>overgeneralization (34%)</p>
            <p>grafico a torta che mostra questi dati dei bias</p>
            <h2>confronto tra realtà e percezione</h2>
            <p>per alcuni argomenti (come immigrazione, criminalità, economia), posso confrontare cosa dicono i media
            e cosa dicono i dati ufficiali (es. ISTAT)</p>
            <p>es. “I media descrivono l’immigrazione come un’emergenza, ma i dati mostrano che X…”</p>
        </Box>

    )
}