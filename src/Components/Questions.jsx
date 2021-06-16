import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionSaveScore, pauseTime } from '../actions';

class Questions extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.calculateScore = this.calculateScore.bind(this);
    this.savePlayerInfos = this.savePlayerInfos.bind(this);
  }

  onClick({ target }) {
    const { stopTimer } = this.props;
    stopTimer();
    if (target.name === 'correct-answer') {
      this.calculateScore();
    }
  }

  calculateScore() {
    const { questionData, currentTime, saveScore } = this.props;
    let difficult = 0;
    const hardValue = 3;
    const baseValue = 10;
    switch (questionData.difficulty) {
    case ('hard'):
      difficult = hardValue;
      break;
    case ('medium'):
      difficult = 2;
      break;
    case ('easy'):
      difficult = 1;
      break;
    default:
      difficult = 0;
      break;
    }
    const questionScore = baseValue + (currentTime * difficult);
    saveScore(questionScore);
    this.savePlayerInfos(questionScore);
  }

  savePlayerInfos(questionScore) {
    const newPlayer = JSON.parse(localStorage.getItem('state'));
    const { score, assertions } = newPlayer.player;
    const newInfos = {
      player: {
        ...newPlayer.player,
        score: score + questionScore,
        assertions: assertions + 1,
      },
    };
    localStorage.setItem('state', JSON.stringify(newInfos));
  }

  render() {
    const { questionData, isTimerPaused, currentTime } = this.props;
    const { category, question } = questionData;
    const newAnswers = [questionData.correct_answer, ...questionData.incorrect_answers];
    return (
      <div>
        <h4 data-testid="question-category">{category}</h4>
        <h3 data-testid="question-text">{question}</h3>
        {newAnswers.sort().map((item, index) => (item === questionData.correct_answer ? (
          <button
            key={ index }
            type="button"
            name="correct-answer"
            data-testid="correct-answer"
            className={ isTimerPaused ? 'correct-answer' : '' }
            onClick={ this.onClick }
            disabled={ isTimerPaused || currentTime === 0 }
          >
            {item}
          </button>
        ) : (
          <button
            key={ index }
            type="button"
            name="wrong-answer"
            data-testid={ `wrong-answer-${index}` }
            className={ isTimerPaused ? 'wrong-answer' : '' }
            onClick={ this.onClick }
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
    difficulty: PropTypes.string.isRequired,
  }).isRequired,
  isTimerPaused: PropTypes.bool.isRequired,
  stopTimer: PropTypes.func.isRequired,
  currentTime: PropTypes.number.isRequired,
  saveScore: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isTimerPaused: state.time.isTimerPaused,
  currentTime: state.time.currentTime,
});

const mapDispatchToProps = (dispatch) => ({
  stopTimer: () => dispatch(pauseTime()),
  saveScore: (score) => dispatch(actionSaveScore(score)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
