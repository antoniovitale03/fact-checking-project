import {Box} from "@mui/material";

export default function SourcesComparison() {
    return(
        <Box>
            <h1>confronto tra le varie testate</h1>
            <p>si trovano degli articoli sulla base della parola chiave inserita dall'utente</p>
            <p>per ogni articolo mostro Logo/nome testate, lingua e/o paese,
            punteggio di polarizzazione, emozioni prevalenti, affidabilità, classificazione testata (mainistream, indipendnete, ...)</p>
            - Filtri: 🇮🇹 solo testate italiane / 🌍 internazionali / tutte
            <h2>Risultati aggregati</h2>
            <h3>distribuzione del sentiment </h3>
            <p>grafico a barre o a torta che mostra quanti articoli positivi/neutri/negativi in percentuale</p>
            <h3>polarizzazione</h3>
            <p>grafico che indica lo score di polarizzazione per ogni testata</p>
            <p>evidenzio quali testate hanno maggiore polarizzazione</p>
            <h3>bias</h3>
            <p>mostro i bias più frequenti (es. authority bias in 30 articoli, overgeneralization in 15...)</p>
            <h3>frequenza di temi e parole chiave</h3>
            <p>analisi dei termini più ricorrenti negli articoli</p>
            <h2>comparazione tra le testate</h2>
            <p>mostro come ogni testata tratta il tema</p>
            <p>indico per ogni testata: Media del sentiment degli articoli, Media polarizzazione, Bias predominanti</p>

        </Box>
    )
}