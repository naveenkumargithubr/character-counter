import {Component} from 'react'
import {v4} from 'uuid'

import WordItem from '../CharWordItem'

import './index.css'

class Characters extends Component {
  state = {wordList: [], userInput: ''}

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onAddWord = event => {
    event.preventDefault()
    const {userInput} = this.state

    const newWord = {
      id: v4(),
      word: userInput,
    }

    this.setState(prevState => ({
      wordList: [...prevState.wordList, newWord],
      userInput: '',
    }))
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const {userInput, wordList} = this.state
    return (
      <div className="bg-container">
        <div className="leftSideCard">
          <h1 className="Heading">Count the characters like a Boss...</h1>
          {wordList.length === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="no-input-image"
            />
          ) : (
            <ul>
              {wordList.map(eachWord => (
                <WordItem key={eachWord.id} wordDetails={eachWord} />
              ))}
            </ul>
          )}
        </div>
        <div className="rightSideCard">
          <h1 className="heading">Character Counter</h1>
          <form className="input-container" onSubmit={this.onAddWord}>
            <input
              type="text"
              //   id="word"
              className="input"
              placeholder="Enter the Characters here"
              value={userInput}
              onChange={this.onChangeUserInput}
            />
            <button className="button" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Characters
