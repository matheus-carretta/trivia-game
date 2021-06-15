import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Questions extends Component {
  render() {
    const { questionData } = this.props;
    const { category, question } = questionData;
    const newAnswers = [questionData.correct_answer, ...questionData.incorrect_answers];
    return (
      <div>
        <h4 data-testid="question-category">{category}</h4>
        <h3 data-testid="question-text">{question}</h3>
        {newAnswers.sort().map((item, index) => (item === questionData.correct_answer ? (
          <button key={ index } type="button" data-testid="correct-answer">
            {item}
          </button>
        ) : (
          <button key={ index } type="button" data-testid={ `wrong-answer-${index}` }>
            {item}
          </button>
        )
        ))}
      </div>
    );
  }
}

Questions.propTypes = {
  questionData: PropTypes.shape({
    category: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    correct_answer: PropTypes.string.isRequired,
    incorrect_answers: PropTypes.arrayOf.isRequired,
  }).isRequired,
};

export default Questions;
