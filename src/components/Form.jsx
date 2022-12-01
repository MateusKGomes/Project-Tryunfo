import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const
      {
        cardName, cardDescription, cardAttr1, cardAttr2,
        cardAttr3, cardImage, cardRare, cardTrunfo,
        isSaveButtonDisabled, onInputChange, onSaveButtonClick,
      } = this.props;
      // tirei o hasTrunfo;
    return (
      <>
        <div>Form</div>
        <div>
          <label htmlFor="cardName">
            Nome da carta:
            <input
              data-testid="name-input"
              id="cardName"
              type="text"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />

          </label>

          <label htmlFor="cardDescription">
            description
            <textarea
              data-testid="description-input"
              name="cardDescription"
              id="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr1">
            attr1
            <input
              id="cardAttr1"
              data-testid="attr1-input"
              type="number"
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr2">
            attr2
            <input
              id="cardAttr2"
              data-testid="attr2-input"
              type="number"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr3">
            attr3
            <input
              id="cardAttr3"
              data-testid="attr3-input"
              type="number"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardImage">
            image
            <input
              data-testid="image-input"
              id="cardImage"
              type="text"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardRare">
            Seleciona a raridade da carta
            <select
              id="cardRare"
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal"> normal </option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="cardTrunfo">
            Super Trybe Trunfo
            <input
              type="checkbox"
              data-testid="trunfo-input"
              name="cardTrunfo"
              id="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          <button
            data-testid="save-button"
            type="submit"
            name="salvar"
            id="salvar"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>

        </div>

      </>

    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  //   hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,

};
export default Form;
