export default function KeywordResults() {
    return(
        <p>
            Se l'utente inserisce una parola chiave, allora il backend recupera articoli da varie fonti
            (nazionali e internazionali) e ne analizza ognuno (tono emotivo, polarizzazione, parole chiave usate, ecc.)
            e genera un resoconto e una comparazione tra le varie fonti.
            Struttura:
            [1] Sintesi generale (overview)
            - Grafico radar: media polarizzazione, emozioni, sentiment
            - Frase di riepilogo: “Il tono medio è moderatamente polarizzato...”

            [2] Confronto tra fonti
            - Grafico a barre orizzontali (una barra per testata)
            - Mostra “Indice di polarizzazione” e “Tono emotivo prevalente”
            - Filtri: 🇮🇹 solo testate italiane / 🌍 internazionali / tutte

            [3] Analisi del linguaggio
            - Word cloud o elenco di parole “trigger” (es. “emergenza”, “crisi”, “arrivi”)
            - Tabella comparativa: termini più frequenti per schieramento

            [4] Lista articoli analizzati
            - Card per ogni articolo:
            - Logo o nome fonte
            - Titolo + breve estratto
            - Punteggi: polarizzazione, tono, emozione principale
            - Pulsante “Analizza nel dettaglio” che reindirizza ad AnalysisPage
        </p>
    )
}