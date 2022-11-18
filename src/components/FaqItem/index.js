// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {showAnswer: false}

  toggleAnswer = () => {
    this.setState(prevState => ({
      showAnswer: !prevState.showAnswer,
    }))
  }

  renderFaqAnswer = () => {
    const {details} = this.props
    const {answerText} = details
    const {showAnswer} = this.state

    if (showAnswer) {
      return (
        <div>
          <hr className="h-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {showAnswer} = this.state

    const {details} = this.props

    const {questionText} = details

    const btnIcon = showAnswer
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const imgAlt = showAnswer ? 'minus' : 'plus'
    return (
      <li className="faq-list-item">
        <div className="faq-container">
          <div className="qsn-container">
            <h1 className="faq">{questionText}</h1>
            <button className="btn" type="button" onClick={this.toggleAnswer}>
              <img src={btnIcon} alt={imgAlt} className="icon" />
            </button>
          </div>
          {showAnswer && this.renderFaqAnswer()}
        </div>
      </li>
    )
  }
}

export default FaqItem
