import {Box} from "@mui/material";

export default function LanguageAnalysis() {
    return(
        <Box>
            <h1>Sentiment Analysis</h1>
            <p>valore globale del sentiment dell'articolo (positivo/neutro/negativo)</p>
            <p>toni emotivi principali (rabbia, paura, gioia, ...) ognuno con score 0-100</p>

            <h1>Linguaggio manipolativo</h1>
            <p>analisi titolo (indice di clickbait del titolo da 1 a 10)</p>
            <p>classificazione del testo (% di frasi fattuali, opinionistiche, interpretative, ...)</p>
            <p>evidenziazione di pattern di bias (come "si dice che", “tutti sanno che…”, “gli esperti affermano…”) </p>
            <p>lista di bias trovati come: sensazionalismo (o emotional wording/appeal, parole che suscitano indignazione),
            negativity bias (enfasi su termini nagativi), authority bias ("secondo gli esperti", ...), overgeneralization bias ("tutti
                "pensano che ...", ...), framing (presentare questioni politiche, leggi o eventi in una certa luce per influenzare l'opinione pubblica e orientare le decisioni, ad esempio
                chi è presentato come buono o cattivo, chi è vittima e colpevole, come sono definiti gli attori della notizia),
                bias di conferma, bias di selezione (solo fatti favorevoli), Bias ideologico (anti-immigrazione, pro-green, ecc.)
            </p>
            <p>per ogni bias trovato mostro le varie frasi nell'articolo + score da 1 a 10</p>
            <h1>Polarizzazione</h1>
            <p>definisco uno Polarization Score (da 1 a 10) basato su: linguaggio estremizzato, attacchi a categorie/partiti,
                presenza di dilemmi noi vs loro, presenza di “nemico” o colpevole, chiamate all’azione emotive</p>
            <p>risultato dello score: basso/medio/alto</p>
            <p>Parti dell’articolo che contribuiscono alla polarizzazione (highlight del testo)</p>
            <h1>verificabilità delle informazioni (scala da 1 a 10)</h1>
            <p>Indicatore di verificabilità (da 1 a 10) sulla base di:</p>
            <p>quante affermazioni fattuali ci sono nel testo, quante sono facilmente verificabili,
                presenza di dati / numeri / statistiche, presenza di fonti citate; </p>
            <p>tipologia delle fonti: governative, accademiche, associazioni, testate giornalistiche,
                social / opinioni</p>
            <p>presenza di fake news: incongruenze temporali, date mancanti, citazioni non verificabili,
                affermazioni senza fonte</p>
            <h1>Analisi della testata giornalistica</h1>
            <p>valutazione dell'affidabilità (scala da 1 a 10) basata su: orientamento politico noto, trasparenza editoriale, ...</p>
            <p>classificazione della testata: mainstream, indipendente, blog personale, tabloid, satira, propaganda</p>
        </Box>
    )
}