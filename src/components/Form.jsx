import React, { Component } from 'react';

class Form extends Component {
  render() {
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
            />

          </label>

          <label htmlFor="description">
            <textarea
              data-testid="description-input"
              name="description"
              id="description"
            />
          </label>

          <label htmlFor="attr1">
            attr1
            <input
              id="attr1"
              data-testid="attr1-input"
              type="number"
              name="attr1"
            />
          </label>

          <label htmlFor="attr2">
            attr2
            <input
              id="attr2"
              data-testid="attr2-input"
              type="number"
              name="attr2"
            />
          </label>

          <label htmlFor="attr3">
            attr3
            <input
              id="attr3"
              data-testid="attr3-input"
              type="number"
              name="attr3"
            />
          </label>

          <label htmlFor="image">
            image
            <input
              data-testid="image-input"
              id="image"
              type="text"
              name="image"
            />
          </label>
          <label htmlFor="rareInput">
            Seleciona a raridade da carta
            <select
              id="rareInput"
              name="raridade"
              data-testid="rare-input"
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
            />
          </label>
          <button
            data-testid="save-button"
            type="submit"
            name="salvar"
            id="salvar"
          >
            Salvar
          </button>

        </div>

      </>

    );
  }
}

export default Form;
