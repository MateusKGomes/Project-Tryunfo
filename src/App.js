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
    const duzentosDez = 210;
    const validationCardName = cardName.length > 0;
    const validationCardDescription = cardDescription.length > 0;
    const validationCardImage = cardImage.length > 0;
    const validationCardAttr1 = +cardAttr1 <= noventa && +cardAttr1 >= 0;
    const validationCardAttr2 = +cardAttr2 <= noventa && +cardAttr2 >= 0;
    const validationCardAttr3 = +cardAttr3 <= noventa && +cardAttr3 >= 0;
    const validationAtributes = +cardAttr1 + +cardAttr2
     + +cardAttr3 <= duzentosDez;

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

  onInputChange = ({ target: { name, type, value, checked } }) => {
    const verifyType = type === 'checkbox' ? checked : value;
    this.setState((prevState) => ({
      ...prevState,
      [name]: verifyType,
    }), this.validationFields);
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const
      {
        cardName, cardDescription, cardAttr1, cardAttr2,
        cardAttr3, cardImage, cardRare, cardTrunfo,
      } = this.state;

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
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
  };

  removeItem = ({ target }) => {
    const getName = target.id;
    const { registeredCards } = this.state;

    const verifyDeleted = registeredCards.filter((cards) => cards.cardName !== getName);
    this.setState({
      registeredCards: verifyDeleted,
    });
  };

  render() {
    const
      {
        cardName, cardDescription, cardAttr1, cardAttr2,
        cardAttr3, cardImage, cardRare, cardTrunfo, registeredCards,
      } = this.state;
    return (
      <div>
        <h1>Trunfo</h1>
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
              <div key={ index }>

                <Card key={ index } { ...element } />
                <button
                  data-testid="delete-button"
                  type="button"
                  name="delete"
                  id={ element.cardName }
                  onClick={ this.removeItem }
                >
                  Excluir
                </button>

              </div>
            ))
          }

        </section>
      </div>
    );
  }
}

export default App;
