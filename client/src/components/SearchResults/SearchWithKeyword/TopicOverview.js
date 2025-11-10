export default function TopicOverview({keywords}){
    return(
        <p>
            Risultati per {keywords}
            Breve frase introduttiva con il numero di articoli trovati:
            “Sono stati analizzati 42 articoli da 18 fonti differenti (12 italiane, 6 internazionali).”
            [1] Sintesi generale (overview) (per tutti gli articoli, italiani e non)
            - Grafico che indica la media di polarizzazione, tono emotivo medio (es. 55% negativo, 25% neutro, 20% positivo),
            principali emozioni rilevate (es. paura, indignazione, compassione)
            - Frase di riepilogo: “Il tema è trattato con tono prevalentemente negativo e polarizzazione moderata.
            Le emozioni più presenti sono paura e indignazione.”
        </p>
    )
}