import React, { Component } from 'react';

class Ranking extends Component {

  state = {
    dados: [],
  }

  async componentDidMount() {
    const data = await fetch('http://localhost:8080/api/ranking').then(response => response.json())
    console.log(data)
  }

  render() {
    
    const { dados } = this.state;
    return (
        <table>
            <thead></thead>
            <tbody>
             {dados.map(dado => (
                 <th> {dado.numeroAtual} </th>

        ))}
            </tbody>
        </table>
    );
  };
};

export default Ranking;