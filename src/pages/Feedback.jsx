import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Feedback extends Component {
  render() {
    return (
      <div>
        <h1 data-testid="feedback-text">feedback</h1>
        <Link to='/'>voltar</Link>
      </div>
    );
  }
}
