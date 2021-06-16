import React from 'react';
import { Link } from 'react-router-dom';

class Ranking extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arrRankingPlayers: [],
    };
  }

  componentDidMount() {
    this.handleRanking();
  }

  handleRanking() {
    // const { arrRankingPlayers } = this.state;
    const localRanking = JSON.parse(localStorage.getItem('ranking'));
    localRanking.sort((a, b) => b.score - a.score);
    this.setState({
      arrRankingPlayers: localRanking,
    });
  }

  render() {
    const { arrRankingPlayers } = this.state;

    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        {arrRankingPlayers.map((item, index) => (
          <div key={ index }>
            <img src={ item.picture } alt={ item.picture } />
            <p data-testid={ `player-name-${index}` }>{item.name}</p>
            <p data-testid={ `player-score-${index}` }>{item.score}</p>
          </div>
        ))}
        <Link data-testid="btn-go-home" to="/">Voltar</Link>
      </div>
    );
  }
}

export default Ranking;
