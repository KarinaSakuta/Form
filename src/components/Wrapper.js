import React, {Component} from 'react';
import Form from './Form';
import firstImage from '../assets/img/bg-image1.png';
import secondImage from '../assets/img/bg-image2.png';

export default class Wrapper extends Component {
  constructor() {
    super();

    this.state = {
      firstName: 'Petya',
      lastName: 'Vasilyev',
      cityList: [{
        key: 1,
        value: 'Minsk',
      }, {
        key: 2,
        value: 'Vitebsk',
      }, {
        key: 3,
        value: 'Brest',
      }, {
        key: 4,
        value: 'Gomel',
      }, {
        key: 5,
        value: 'Grodno',
      }],
      city: 1,
      gender: 1 // 1 - мужчина, 2 - женщина
    };

    this.sendDataToConsole = this.sendDataToConsole.bind(this);
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onCityChange = this.onCityChange.bind(this);
    this.onGenderChange = this.onGenderChange.bind(this);
  }

  onFirstNameChange(newFirstName) {
    this.setState({ firstName: newFirstName });
  }

  onLastNameChange(newLastName) {
    this.setState({ lastName: newLastName });
  }

  onCityChange(newCity) {
    this.setState({ city: newCity });
  }

  onGenderChange(newGender) {
    this.setState({ gender: newGender });
  }

  sendDataToConsole() {
    console.log('firstName: ', this.state.firstName);
    console.log('lastName: ', this.state.lastName);
    console.log('city: ', this.state.city);
    console.log('gender: ', this.state.gender);
  }

  render() {
    return (
      <div className="wrapper">
        <img src={secondImage} alt="img" className="wrapper__picture"/>
        <div className="wrapper__form-container">
          <Form
            firstName={this.state.firstName}
            onFirstNameChange={this.onFirstNameChange}

            lastName={this.state.lastName}
            onLastNameChange={this.onLastNameChange}

            cityList={this.state.cityList}
            city={this.state.city}
            onCityChange = {this.onCityChange}

            onGenderChange = {this.onGenderChange}
            gender={this.state.gender}
          />
          <button className="wrapper__button" onClick={this.sendDataToConsole}>Отправить</button>
        </div>
        <img src={firstImage} alt="img" className="wrapper__picture"/>
      </div>
    );
  }
}
