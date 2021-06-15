import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTimer } from '../actions';

class Timer extends Component {
  componentDidMount() {
    const { decrementTime } = this.props;
    const oneSec = 1000;
    this.timer = setInterval(() => { decrementTime(); }, oneSec);
  }

  componentDidUpdate() {
    const { currentTime, isTimerPaused } = this.props;
    if (currentTime === 0 || isTimerPaused) {
      clearInterval(this.timer);
    }
  }

  render() {
    const { currentTime } = this.props;
    console.log(currentTime);
    return (
      <div>
        {currentTime}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentTime: state.time.currentTime,
  isTimerPaused: state.time.isTimerPaused,
});

const mapDispatchToProps = (dispatch) => ({
  decrementTime: () => dispatch(setTimer()),
});

Timer.propTypes = {
  currentTime: PropTypes.number.isRequired,
  decrementTime: PropTypes.func.isRequired,
  isTimerPaused: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
