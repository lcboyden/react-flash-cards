import React from "react";
import { Form, } from "semantic-ui-react";

class FlashCardForm extends React.Component {
  state = { term: "", definition: ""};

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({ term: "", definition: "",});
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  }; 

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Term" 
            placeholder="Term" 
            name="term" 
            value={this.state.term} 
            onChange={this.handleChange}
          />
          <Form.Input 
            fluid 
            label="Definition" 
            placeholder="Definition" 
            name="definition" 
            value={this.state.definition} 
            onChange={this.handleChange}
          />
          <Form.Button>Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

export default FlashCardForm;