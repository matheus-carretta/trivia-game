import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { linkGravatar, name, score } = this.props;
    return (
      <header>
        <img
          data-testid="header-profile-picture"
          alt="user login"
          src={ linkGravatar }
        />
        <h4
          data-testid="header-player-name"
        >
          Player:
          { name }
        </h4>

        <h4
          data-testid="header-score"
        >
          Score:
          { score }
        </h4>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  linkGravatar: state.user.gravatar,
  name: state.user.name,
  score: state.game.score,
});

Header.propTypes = {
  linkGravatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
