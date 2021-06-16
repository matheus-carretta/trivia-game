import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Components/Header';

class Feedback extends Component {
  render() {
    const { assertions, score } = this.props;
    const minAssertions = 3;
    return (
      <div>
        <Header />
        <h1 data-testid="feedback-text">Feedback</h1>
        {assertions >= minAssertions
          ? <h2 data-testid="feedback-text">Mandou bem!</h2>
          : <h2 data-testid="feedback-text">Podia ser melhor...</h2>}
        <h2 data-testid="feedback-total-score">
          {score}
        </h2>
        <h2 data-testid="feedback-total-question">
          {assertions}
        </h2>
        <Link to="/">
          <button type="button" data-testid="btn-play-again">Jogar novamente</button>
        </Link>

        <Link to="/ranking">
          <button type="button" data-testid="btn-ranking">Ver Ranking</button>
        </Link>
      </div>
    );
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  assertions: state.user.assertions,
  score: state.user.score,
});
export default connect(mapStateToProps, null)(Feedback);
