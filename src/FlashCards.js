import React from "react";
import { Card } from "semantic-ui-react";
import FlashCard from "./FlashCard";

const FlashCards = ( { flashCards, remove } ) => (
  <div>
    <Card.Content>
      {
        flashCards.map( flashCard => (
          <FlashCard 
            key={flashCard.id}
            flashCard={flashCard}
            {...flashCards}
            remove={remove}
          />
        ))
      }
    </Card.Content>
  </div>
);

export default FlashCards;