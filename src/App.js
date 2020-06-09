import React from 'react';
import './App.css';
import { Container, Header, } from "semantic-ui-react"; 
import FlashCards from "./FlashCards";
import FlashCardForm from "./FlashCardForm"

class App extends React.Component {
  state = {
    cards: [
      { id: 1, term: "palette de peintre", definition: "painter's palette"},
      { id: 2, term: "tableau", definition: "painting"},
      { id: 3, term: "toile", definition: "canvas"},
      { id: 4, term: "gravure", definition: "print"},
      { id: 5, term: "dessin", definition: "drawing"},
      { id: 6, term: "aquarelle", definition: "watercolor"},
      { id: 7, term: "iconothèque", definition: "iconographic"},
      { id: 8, term: "conservateur (d'un musee)", definition: "curator", },
      { id: 9, term: "exposition", definition: "exhibition", },
      { id: 10, term: "triptyque", definition: "triptych", },
    ]
  };
  
  addFlashCard = (flashcard) => {
    let newFlashcard = { id: `${Math.random()}`, ...flashcard};
    this.setState({ cards: [newFlashcard, ...this.state.cards]});
  };

  removeFlashCard = (id) => {
    const cards = this.state.cards.filter( card => {
      if (card.id !== id)
        return card
    });
    this.setState({ cards: [...cards], });
  };

  render() {
    return (
      <Container style={{ paddingTop: "25px" }}>
      <Header as="h1">React Flash Cards</Header>
      <Header as="h3">French Vocabulary: Art History</Header>
      <br />
      <FlashCardForm 
        add={this.addFlashCard}
      />
      <FlashCards 
        flashCards={this.state.cards} 
        remove={this.removeFlashCard}
      />
    </Container>
    );
  }
}

export default App;
