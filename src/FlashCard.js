import React from "react";
import { Card, Button } from "semantic-ui-react";

const FlashCard = ( {flashCard} ) => (
  <Card>
    <Card.Content key={flashCard.id}>
      <Card.Header>{flashCard.term}</Card.Header>
      <Card.Description>{flashCard.definition}</Card.Description>
    </Card.Content>

    <Card.Content extra>
      <Button color="violet">
        Delete
      </Button>
    </Card.Content>
  </Card>
);

export default FlashCard;