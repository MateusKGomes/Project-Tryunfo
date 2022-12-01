import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const
      {
        cardName, cardDescription, cardAttr1, cardAttr2,
        cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo,
        isSaveButtonDisabled, onInputChange, onSaveButtonClick,
      } = this.props;
    return (
      <>
        <div>Form</div>
        <div>
          <label htmlFor="name">
            Nome da carta:
            <input
              data-testid="name-input"
              id="name"
              type="text"
              name="name"
              value={ cardName }
              onChange={ onInputChange }
            />

          </label>

          <label htmlFor="description">
            <textarea
              data-testid="description-input"
              name="description"
              id="description"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr1">
            attr1
            <input
              id="attr1"
              data-testid="attr1-input"
              type="number"
              name="attr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr2">
            attr2
            <input
              id="attr2"
              data-testid="attr2-input"
              type="number"
              name="attr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr3">
            attr3
            <input
              id="attr3"
              data-testid="attr3-input"
              type="number"
              name="attr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="image">
            image
            <input
              data-testid="image-input"
              id="image"
              type="text"
              name="image"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="rareInput">
            Seleciona a raridade da carta
            <select
              id="rareInput"
              name="raridade"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal"> normal </option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="superTrunfo">
            Super Trybe Trunfo
            <input
              type="checkbox"
              data-testid="trunfo-input"
              name="superTrunfo"
              id="superTrunfo"
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,

};
export default Form;
