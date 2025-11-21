import {Box} from "@mui/material";

export default function SourcesComparison(){
    return(
        <Box>
            <h1> confronto con fonti </h1>
            <p>(filtro "solo fonti italiane", "solo fonti internazionali", "tutte le fonti" e "traduzione automatica delle fonti internazionali")</p>
            <p>estrazione dall'articolo originale titolo, autore, data, testo completo, parole chiavi, ecc. per ricercare
            articoli simili da altre fonti</p>
            <p>output con gli articoli trovati e per ciascuno mostro: testata, titolo, data, link "visualizza articolo completo"</p>
            <p>per ogni articolo si fa la stessa analisi fatta precedentemente per l'articolo originale</p>
            <p>raggruppo i vari articoli in base al paese d'origine e tiro un resoconto su come la notizia viene trattata in quel
            paese (es. in Francia notizia X ha una forte polarizzazione ecc... )</p>
            <h2>Valutazione aggregata dei parametri</h2>
            <h3>sentiment</h3>
            <p>grafico a barre dove indico per ogni fonte il livello di sentiment generale (positivo, neutro, negativo)</p>
            <h3>bias linguistici</h3>
            <p>mostro quali bias ci sono in quali testate</p>
            <h3>polarizzazione</h3>
            <p>grafico a barre con lo score di polarizzazione per ogni fonte</p>
            <h3>verificabilità</h3>
            <p>grafico in cui indico lo score di verificabilità per ogni fonte</p>
            <h3>Affidabilità</h3>
            <p>grafico in cui mostro lo score di affidabilità per ogni fonte</p>
            <h2>Similarità narrativa tra gli articoli</h2>
            <p>mostro quali articoli presentano la notizia nella stessa prospettiva</p>
            <p>mostro quelli che invece la presentano in maniera completamente diversa</p>
            <h2>Rating dinamico delle varie testate</h2>
            <p>per ogni testata calcolo un rating dinamico basato su: </p>
            <p>frequenza di bias, polarizzazione media degli articoli, affidabilità della fonte, ... </p>
        </Box>
    )
}