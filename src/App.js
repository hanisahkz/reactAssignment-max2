import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';


class App extends Component {

    state = {
        someObject: {
            someInput: 'some random string',
        }
    };


  textLengthHandler = (event) => {
      this.setState({
          someObject: {
              someInput: event.target.value
          }
      })
  };

  //Todo: remaining issue with updating List dynamically
  deleteChar = (charIndex) => {
    const charArray = [...this.state.someObject.someInput.split("")];
    charArray.splice(charIndex, 2);
    const processedInput = {
        ...charArray.join()
    };
    this.setState({
        someObject: {
            someInput: processedInput
        }
    })
  };
  //can define all of the FUNCTIONS above it

  //within the render method, you can: i) define local object, ii) what DOM to return
  render() {

      let textLengthValidator = null;

      if (this.state.someObject.someInput.length < 20) {
        textLengthValidator = (
            <div>
                <p>Text too short</p>
            </div>
        );
      } else {
          const charArray = this.state.someObject.someInput.split("");
          textLengthValidator = (
              <div>
                  <ValidationComponent textLength={this.state.someObject.someInput}/>
                  {charArray.map((char, index) => {
                     return <CharComponent
                          individualChar={char}
                          key={Math.random()}
                          click={() => this.deleteChar(index)}
                      />
                    }
                  )}
              </div>
          );
      }

    return (
      <div className="App">
        <input type='text' value={this.state.someObject.someInput} onChange={this.textLengthHandler}/>
        <p>{this.state.someObject.someInput}</p>
        <p>{this.state.someObject.someInput.length}</p>
        {textLengthValidator}
      </div>
    );
  }
}

export default App;
