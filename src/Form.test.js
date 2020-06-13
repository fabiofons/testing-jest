import React from 'react';
import { render } from '@testing-library/react';
import Form from './Form';
const teams = [{label: 'RM', value: 1}, {label: 'Barcelona', value: 2}];
const players = [{value: 4, label: 'CR7' , teamid: 1}, {value: 5, label: 'Messi', teamid: 2}];

test('form have a filter', () => {
  const { getByTestId, getByLabelText, getByText } = render(<Form teams={teams} players={players}/>);
  const filter = getByTestId('select');
  const team = getByLabelText('escoge tu equipo');
  teams.forEach((team) => {
    const option = getByText(team.label);
    expect(option).toHaveAttribute('value', team.value.toString());
  });
  expect(filter).toBeInTheDocument();
  expect(team).toBeInTheDocument();
});

test('form have options', () => {
  const { getByLabelText } = render(<Form teams={teams} players={players}/>);
  players.forEach((player) => {
    const checkbox = getByLabelText(player.label);
    expect(checkbox).toHaveAttribute('type', 'checkbox');
    expect(checkbox).toHaveAttribute('value', player.value.toString());
  })
});