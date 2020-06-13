import React from 'react';

function Form({teams, players}) {
  return (
    <form data-testid="form">
      <label htmlFor="select">escoge tu equipo</label>
      <select id="select" data-testid='select'>
        {teams.map((team) => {
          return (
            <option key={team.value} value={team.value}>{team.label}</option>
          )
        })}
      </select>
      {players.map((player) => {
        return (
          <div key={player.value}>
            <label htmlFor={`player-${player.value}`}>{player.label}</label>
            <input id={`player-${player.value}`} type="checkbox" value={player.value} name="player"/>
          </div>
        )
      })}
    </form>
  )
}

export default Form;