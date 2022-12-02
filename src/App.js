import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
};

class App extends React.Component {
  state = {
    ...INITIAL_STATE,
    registeredCards: [],

  };

  validationFields = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage } = this.state;
    const noventa = 90;
    const duzentos = 210;
    const validationCardName = cardName.length > 0;
    const validationCardDescription = cardDescription.length > 0;
    const validationCardImage = cardImage.length > 0;
    const validationCardAttr1 = +cardAttr1 <= noventa && +cardAttr1 >= 0;
    const validationCardAttr2 = +cardAttr2 <= noventa && +cardAttr2 >= 0;
    const validationCardAttr3 = +cardAttr3 <= noventa && +cardAttr3 >= 0;
    const validationAtributes = +cardAttr1 + +cardAttr2
     + +cardAttr3 <= duzentos;

    this.setState({
      isSaveButtonDisabled: !(validationCardName
        && validationCardDescription
        && validationCardImage
        && validationCardAttr1
        && validationCardAttr2
        && validationCardAttr3
        && validationAtributes),
    });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = name === 'cardTrunfo' ? target.checked : target.value;

    this.setState(() => ({
      [name]: value,
    }), this.validationFields);
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const
      {
        cardName, cardDescription, cardAttr1, cardAttr2,
        cardAttr3, cardImage, cardRare, cardTrunfo,
      } = this.state;

    if (cardTrunfo) {
      console.log(cardTrunfo);
      this.setState({
        hasTrunfo: false,
        cardTrunfo: true,
      });
    }

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState(({ registeredCards }) => ({
      registeredCards: [...registeredCards, newCard],
    }));
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const
      {
        cardName, cardDescription, cardAttr1, cardAttr2,
        cardAttr3, cardImage, cardRare, cardTrunfo, registeredCards,
      } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <section>
          {
            registeredCards.map((element, index) => (
              <Card key={ index } { ...element } />
            ))
          }
        </section>
      </div>
    );
  }
}

export default App;
