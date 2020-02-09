import React, {Component} from 'react';

export default class Form extends Component {
  constructor() {
    super();

    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onCityChange = this.onCityChange.bind(this);
    this.onGenderChange = this.onGenderChange.bind(this);
  }

  onFirstNameChange(event) {
    this.props.onFirstNameChange(event.target.value);
  }

  onLastNameChange(event) {
    this.props.onLastNameChange(event.target.value);
  }

  onCityChange(event) {
    this.props.onCityChange(event.target.value);
  }

  onGenderChange(event) {
    this.props.onGenderChange(event.target.value);
  }

  renderCityOptions() {
    return this.props.cityList.map((cityListElement) => {
        return (
          <option className="form__option" value={cityListElement.key}>{cityListElement.value}</option>
        );
    });
  }

  render() {
    return (
      <div className="form">
        <form className="form__element">
          <label className="form__label">
            Введите имя:
            <input className="form__text-input" value={this.props.firstName} type="text" onChange={this.onFirstNameChange} />
          </label>
          <label className="form__label">
            Введите фамилию:
            <input className="form__text-input" value={this.props.lastName} type="text" onChange={this.onLastNameChange} />
          </label>
          <label className="form__label">
            Выберите город:
            <select className="form__select" onChange={this.onCityChange}>
              {this.renderCityOptions()}
            </select>
          </label>
          <label className="form__label">
            Выберите пол:
          </label>
          <div className="form__label-container">
            <div className="form__label-inner-container">
              <label className="form__label">
                М
                <input className="form__radio-input" type="radio" name="gender" value="1" onChange={this.onGenderChange}></input>
              </label>
            </div>
            <div className="form__label-inner-container">
              <label className="form__label">
                Ж
                <input className="form__radio-input" type="radio" name="gender" value="2" onChange={this.onGenderChange} />
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
