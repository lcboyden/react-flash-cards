import React from "react";
import { Card, Button } from "semantic-ui-react";

const FlashCard = ( {flashCard, remove, toggleCard} ) => (

  <Card>
    <Card.Content key={flashCard.id}>
      {/* <Card.Header>{flashCard.term}</Card.Header>
      <Card.Description>{flashCard.definition}</Card.Description>
      <p>{flashCard.showDef ? "show" : "hide"}</p> */}

    {flashCard.showDef ? (<div>{flashCard.term}</div>) : (<div>{flashCard.definition}</div>)}
    </Card.Content>

    <Card.Content extra>
      <Button color="olive" onClick={ () => toggleCard(flashCard)}>Switch</Button>
      <Button color="violet" onClick={() => remove(flashCard.id)}>
        Delete
      </Button>
    </Card.Content>
  </Card>
);

export default FlashCard;