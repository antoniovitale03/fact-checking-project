import {Card, CardContent} from "@mui/material";

export default function TopicCard(){
    return(
        <Card>
            <CardContent>card di un topic</CardContent>
            mostra ogni ricerca tematica fatta (per parole chiave)
            {/*
            <TopicCard
              keyword="Immigrazione in Italia"
              articleCount={12}
              avgPolarization={0.61}
              onOpen={() => viewTopicAnalysis(topicId)}
              onRemove={() => removeFromList(topicId)}
            />
            */}
        </Card>
    )
}