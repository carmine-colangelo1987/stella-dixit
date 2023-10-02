/** @format */

import PlayerCard from '../../../../common/PlayerCard';
import { CreationPlayer } from '../../index';
import classes from './playersList.module.scss';

type Props = {
  players: Array<CreationPlayer>;
  onRemovePlayer?: (index: number) => void;
  onPlayerSelected?: (index: number) => void;
};

const PlayersList = ({ players, onRemovePlayer, onPlayerSelected }: Props) => {
  const onClick = (i: number) => () => {
    onPlayerSelected && onPlayerSelected(i);
  };

  const onRemove = (i: number) => () => {
    onRemovePlayer && onRemovePlayer(i);
  };

  const text =
    players.length === 0
      ? 'Nessun giocatore creato...'
      : players.length === 1
      ? `Hai creato un giocatore`
      : `Hai creato ${players.length} giocatori!`;

  return (
    <div className="py-4 space-y-4">
      <p className="text-center text-main-text-lighten">{text}</p>
      {players.length > 0 && (
        <ul className={classes.list}>
          {players.map((player, i) => {
            return (
              <li key={player.name}>
                <PlayerCard
                  name={player.name}
                  color={player.color}
                  onRemove={onRemovePlayer && onRemove(i)}
                  onClick={onPlayerSelected && onClick(i)}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default PlayersList;
