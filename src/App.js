import React from 'react';
import './App.css';
import { Container, Header, } from "semantic-ui-react"; 
import FlashCards from "./FlashCards";
import FlashCardForm from "./FlashCardForm"

class App extends React.Component {
  state = {
    cards: [
      { id: 1, term: "palette de peintre", definition: "painter's palette", showDef: false},
      { id: 2, term: "tableau", definition: "painting", showDef: false},
      { id: 3, term: "toile", definition: "canvas", showDef: false},
      { id: 4, term: "gravure", definition: "print", showDef: false},
      { id: 5, term: "dessin", definition: "drawing", showDef: false},
      { id: 6, term: "aquarelle", definition: "watercolor", showDef: false},
      { id: 7, term: "iconothèque", definition: "iconographic", showDef: false},
      { id: 8, term: "conservateur (d'un musee)", definition: "curator", showDef: false},
      { id: 9, term: "exposition", definition: "exhibition", showDef: false},
      { id: 10, term: "triptyque", definition: "triptych", showDef: false},
    ]
  };
  
  toggleCard = ( card ) => {
    this.setState({ cards: this.state.cards.map(c => {
      if (c.id === card.id) {
        return {...card, showDef: !card.showDef}
      } 
      return c
    }) 
  })
  }

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
      <Header as="h1" color="violet">React Flash Cards</Header>
      <Header as="h3">French Vocabulary: Art History</Header>
      <br />
      <FlashCardForm 
        add={this.addFlashCard}
      />
      <FlashCards 
        flashCards={this.state.cards} 
        remove={this.removeFlashCard}
        toggleCard={this.toggleCard}
      />
    </Container>
    );
  }
}

export default App;
