import {Card, CardContent} from "@mui/material";

export default function ArticleCard(){
    return(
        <Card>
            <CardContent>
                card articolo
            </CardContent>
            {/*
            <ArticleCard
                title="Titolo della notizia"
                source="Corriere della Sera"
                url="url ufficiale della notizia"
                sentiment="negativo"
                polarization={0.78}
                onView={() => viewAnalysis(articleId)}
                onRemove={() => removeFromList(articleId)}
            />
            */
            }

        </Card>
    )
}