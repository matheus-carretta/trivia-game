import React from 'react';
import Header from '../Components/Header';
import Controller from '../Components/Controller';

class Game extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Controller />
      </main>
    );
  }
}

export default Game;
