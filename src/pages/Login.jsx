import React from 'react';
import '../Style/Login.css';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import { actionFetchToken, actionSaveUser } from '../actions';

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

  async handleSubmit(e) {
    e.preventDefault();
    const { nome, email } = this.state;
    const { getToken, saveUser } = this.props;
    getToken();
    const gravatar = md5(email).toString();
    const state = {
      player: { name: nome, assertions: 0, score: 0, gravatarEmail: email },
    };
    saveUser(state.player, gravatar);
    localStorage.setItem('state', JSON.stringify(state));
    this.setState({ redirect: true });
  }

  render() {
    const { nome, email, redirect } = this.state;
    if (redirect) return <Redirect to="/game" />;

    return (
      <div className="formContainer">
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="input-player-name">
            <input
              name="nome"
              value={ nome }
              id="input-player-name"
              type="text"
              data-testid="input-player-name"
              onChange={ this.handleChange }
              placeholder="Name"
            />
          </label>
          <label htmlFor="input-gravatar-email">
            <input
              name="email"
              value={ email }
              id="input-gravatar-email"
              type="email"
              data-testid="input-gravatar-email"
              onChange={ this.handleChange }
              placeholder="Email"
            />
          </label>
          <button
            type="submit"
            data-testid="btn-play"
            disabled={ !nome.length || !email.length }
          >
            Play
          </button>
          <Link data-testid="btn-settings" to="/settings">Settings</Link>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  getToken: PropTypes.func.isRequired,
  saveUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  token: state.user.token,
});

const mapDispatchToProps = (dispatch) => ({
  getToken: () => dispatch(actionFetchToken()),
  saveUser: (user, gravatar) => dispatch(actionSaveUser(user, gravatar)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
