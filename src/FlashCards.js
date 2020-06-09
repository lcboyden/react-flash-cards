import React from "react";
import { Card } from "semantic-ui-react";
import FlashCard from "./FlashCard";

const FlashCards = ( { flashCards } ) => (
  <div>
    <Card.Content>
      {
        flashCards.map( flashCard => (
          <FlashCard 
            key={flashCard.id}
            flashCard={flashCard}
          />
        ))
      }
    </Card.Content>
  </div>
);

export default FlashCards;