import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import WordsDisplay from './components/WordsDisplay'

import './App.css'

// Replace your code here
class App extends Component {
  state = {inputValue: '', wordsList: []}

  onAddInputValue = event => {
    event.preventDefault()
    const {inputValue} = this.state

    const wordItem = {id: uuidv4(), inputValue}

    this.setState(prevState => ({
      wordsList: [...prevState.wordsList, wordItem],
      inputValue: '',
    }))
  }

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  render() {
    const {inputValue, wordsList} = this.state

    console.log(wordsList)

    const isEmpty = wordsList.length <= 0

    return (
      <div className="bg-container">
        <div className="display-container">
          <div className="heading-container">
            <h1>Count the characters like a Boss...</h1>
          </div>
          {isEmpty ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="image"
            />
          ) : (
            <ul className="ul-cont">
              {wordsList.map(eachItem => (
                <WordsDisplay items={eachItem} key={eachItem.id} />
              ))}
            </ul>
          )}
        </div>
        <div className="add-container">
          <h1 className="heading">Character Counter</h1>
          <form onSubmit={this.onAddInputValue}>
            <input
              value={inputValue}
              onChange={this.onChangeInput}
              placeholder="Enter the Characters Here"
              className="input-box"
            />
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
