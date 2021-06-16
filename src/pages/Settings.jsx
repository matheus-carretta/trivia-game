import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionSetConfiguration } from '../actions/index';

const INITIAL_STATE = {
  category: '',
  difficult: '',
  type: '',
};
const listCategory = [
  { id: 0, name: 'Any Category', value: '' },
  { id: 11, name: 'Movies', value: 11 },
  { id: 20, name: 'Mitology', value: 20 },
  { id: 9, name: 'General Knowledge', value: 9 },
  { id: 18, name: 'Computers', value: 18 },
  { id: 21, name: 'Sports', value: 21 },
];

const listDifficult = [
  { id: 0, name: 'both', value: '' },
  { id: 1, name: 'easy', value: 'easy' },
  { id: 2, name: 'medium', value: 'medium' },
  { id: 3, name: 'hard', value: 'hard' },
];
const listType = [
  { id: 0, name: 'both', value: '' },
  { id: 1, name: 'boolean', value: 'boolean' },
  { id: 2, name: 'multiple', value: 'multiple' },
];
class Settings extends Component {
  constructor() {
    super();
    this.state = {
      ...INITIAL_STATE,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { saveSettings } = this.props;
    return (
      <div>
        <h1 data-testid="settings-title">Settings</h1>
        <select name="category" onChange={ this.handleChange }>
          {listCategory.map((category) => (
            <option key={ category.id } value={ category.value }>{category.name}</option>
          ))}
        </select>

        <select name="difficult" onChange={ this.handleChange }>
          {listDifficult.map((difficult) => (
            <option
              key={ difficult.id }
              value={ difficult.value }
            >
              {difficult.name}
            </option>))}
        </select>

        <select name="type" onChange={ this.handleChange }>
          {listType.map((type) => (
            <option key={ type.id } value={ type.value }>{type.name}</option>))}
        </select>
        <Link to="/">

          <button
            type="button"
            onClick={ () => { saveSettings(this.state); } }
          >
            Save Settings
          </button>
        </Link>
      </div>
    );
  }
}

Settings.propTypes = {
  saveSettings: PropTypes.func.isRequired,

};

const mapDispatchToProps = (dispatch) => ({
  saveSettings: (settings) => dispatch(actionSetConfiguration(settings)),
});

export default connect(null, mapDispatchToProps)(Settings);
