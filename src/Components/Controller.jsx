import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionFetchGameData } from '../actions';

import Loading from './Loading';
import Questions from './Questions';

class Controller extends Component {
  constructor(props) {
    super(props);

    this.handleNextQuestion = this.handleNextQuestion.bind(this);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    const { fetchGameData, token } = this.props;
    fetchGameData(token);
  }

  handleNextQuestion() {
    // const { count } = this.state;
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  }

  render() {
    const { gameData, currentTime, isTimerPaused } = this.props;
    const { count } = this.state;
    console.log(gameData);
    return (
      <div>
        {!gameData.length ? (
          <Loading />
        ) : (
          <Questions questionData={ gameData[count] } />
        )}
        {
          (currentTime === 0 || isTimerPaused)
        && <button type="button" data-testid="btn-next">Next</button>
        }
      </div>
    );
  }
}

Controller.propTypes = {
  fetchGameData: PropTypes.func.isRequired,
  gameData: PropTypes.arrayOf(PropTypes.object).isRequired,
  token: PropTypes.string.isRequired,
  isTimerPaused: PropTypes.bool.isRequired,
  currentTime: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  gameData: state.game.gameData,
  token: state.user.token,
  isTimerPaused: state.time.isTimerPaused,
  currentTime: state.time.currentTime,
});

const mapDispatchToProps = (dispatch) => ({
  fetchGameData: (token) => dispatch(actionFetchGameData(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
