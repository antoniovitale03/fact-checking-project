export default function LanguageAnalysis() {
    return(
        <p>
            Mostro informazioni tipo:
            Grado di polarizzazione (es. 0.74 → “fortemente polarizzato”)
            Parti dell’articolo che contribuiscono alla polarizzazione (highlight del testo)
            Tono emotivo principale (es. “rabbia”)
            Distribuzione emozioni secondarie (paura, indignazione, speranza, ecc.)
            Sentiment generale (positivo / neutro / negativo)

            Classificazione del testo:

            frasi fattuali

            frasi opinionistiche

            frasi interpretative

            poi:
            Frasi evidenziate con pattern di bias (es. “si dice che”, “tutti sanno che…”, “gli esperti affermano…”)
            Lista di bias trovati, es.:
            Framing politico
            Sensazionalismo
                Negativity bias (enfasi su termini negativi);
                Authority bias (“Secondo gli esperti…”);
                Overgeneralization (“Tutti pensano che…”);
                Emotional appeal (“È scandaloso che…”).
            Evidenziazione nel testo (es. parole in rosso/azzurro secondo tono)

            9. Rilevamento manipolazione delle immagini

            Per articoli con immagini:

            reverse image search (API esterne)

            rilevamento deepfake semplice

            metadata parser
        </p>
    )
}