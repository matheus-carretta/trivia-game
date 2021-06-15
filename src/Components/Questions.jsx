import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pauseTime } from '../actions';
import Timer from './Timer';

class Questions extends Component {
  render() {
    const { questionData, isTimerPaused, stopTimer, currentTime } = this.props;
    const { category, question } = questionData;
    const newAnswers = [questionData.correct_answer, ...questionData.incorrect_answers];
    return (
      <div>
        <Timer />
        <h4 data-testid="question-category">{category}</h4>
        <h3 data-testid="question-text">{question}</h3>
        {newAnswers.sort().map((item, index) => (item === questionData.correct_answer ? (
          <button
            key={ index }
            type="button"
            data-testid="correct-answer"
            className={ isTimerPaused ? 'correct-answer' : '' }
            onClick={ stopTimer }
            disabled={ isTimerPaused || currentTime === 0 }
          >
            {item}
          </button>
        ) : (
          <button
            key={ index }
            type="button"
            data-testid={ `wrong-answer-${index}` }
            className={ isTimerPaused ? 'wrong-answer' : '' }
            onClick={ stopTimer }
            disabled={ isTimerPaused || currentTime === 0 }
          >
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
  isTimerPaused: PropTypes.bool.isRequired,
  stopTimer: PropTypes.func.isRequired,
  currentTime: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  isTimerPaused: state.time.isTimerPaused,
  currentTime: state.time.currentTime,
});

const mapDispatchToProps = (dispatch) => ({
  stopTimer: () => dispatch(pauseTime()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
