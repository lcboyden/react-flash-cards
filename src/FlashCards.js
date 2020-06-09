import React from "react";
import { Card } from "semantic-ui-react";
import FlashCard from "./FlashCard";

const FlashCards = ( { flashCards, remove, toggleCard } ) => (
  <div>
    <Card.Content>
      {
        flashCards.map( flashCard => (
          <FlashCard 
            key={flashCard.id}
            flashCard={flashCard}
            {...flashCards}
            remove={remove}
            toggleCard={toggleCard}
          />
        ))
      }
    </Card.Content>
  </div>
);

export default FlashCards;