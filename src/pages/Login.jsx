import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionFetchToken } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { getToken } = this.props;
    getToken();
  }

  render() {
    const { nome, email, redirect } = this.state;
    if (redirect) return <Redirect to="/game" />;

    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="input-player-name">
          Nome:
          <input
            name="nome"
            value={ nome }
            id="input-player-name"
            type="text"
            data-testid="input-player-name"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="input-gravatar-email">
          Email:
          <input
            name="email"
            value={ email }
            id="input-gravatar-email"
            type="email"
            data-testid="input-gravatar-email"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="submit"
          data-testid="btn-play"
          disabled={ !nome.length || !email.length }
        >
          Jogar
        </button>
        <Link data-testid="btn-settings" to="/settings">Settings</Link>
      </form>
    );
  }
}

Login.propTypes = {
  getToken: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  token: state.user.token,
});

const mapDispatchToProps = (dispatch) => ({
  getToken: () => dispatch(actionFetchToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
