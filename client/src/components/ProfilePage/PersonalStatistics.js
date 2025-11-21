import {Box} from "@mui/material";

export default function PersonalStatistics() {
    return(
        <Box>
            <h1>Statistiche personali</h1>
            <p>Numero Analisi totali</p>
            <p>Numero Articoli analizzati</p>
            <p>Numero Topic analizzati</p>
            <p>argomenti più frequenti ricercati dall'utente oppure trovati negli articoli</p>
            <p>grafico a torte che mostra quanto spesso l'utente incontra certi tipi di bias</p>
            <p>Media del tono emotivo → % di positività/negatività/neutralità degli articoli analizzati dall’utente</p>
            <p>grafico che mostra da quali testate provengono le notizie analizzate e ricerche tematiche più frequentemente.</p>
            <p>grafico che mostra la percentuale di articoli con alta polarizzazione tra tutti gli articoli analizzati </p>
            <p>lo stesso vale per le ricerche tematiche</p>
            <h2>score di polarizzazione media dell'utente, sulla base di tutti gli articoli e topic analizzati</h2>
            <p>grafico cumulativo di polarizzazione → linea temporale che mostra l’andamento della polarizzazione media
                delle notizie analizzate dall’utente o ricerche tematiche fatte</p>

        </Box>

    )
}