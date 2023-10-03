/** @format */

import PlayerCard from '../../../../common/PlayerCard';
import { CreationPlayer } from '../../index';
import classes from './playersList.module.scss';
import classNames from 'classnames';

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

  return (
    <div className="py-4">
      <ul className={classes.list}>
        {players.map((player, i) => {
          return (
            <li key={player.name} className={classNames({ 'opacity-50': player.paired })}>
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
    </div>
  );
};

export default PlayersList;
