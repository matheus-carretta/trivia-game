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
    const { currentTime } = this.props;
    if (currentTime === 0) {
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
});

const mapDispatchToProps = (dispatch) => ({
  decrementTime: () => dispatch(setTimer()),
});

Timer.propTypes = {
  currentTime: PropTypes.number.isRequired,
  decrementTime: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
