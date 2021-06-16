import React from 'react';
import Header from '../Components/Header';
import Controller from '../Components/Controller';
import Timer from '../Components/Timer';

class Game extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Timer />
        <Controller />
      </main>
    );
  }
}

export default Game;
