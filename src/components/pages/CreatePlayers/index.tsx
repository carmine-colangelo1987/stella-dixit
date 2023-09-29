/** @format */

import { useMemo, useState } from 'react';
import { Player } from '../../../types';
import PageTitle from '../../common/PageTitle';
import { tailwindColorList } from '../../../utils/tailwindColors';
import InsertNewPlayer from './partials/InsertNewPlayer';
import PlayerCard from '../../common/PlayerCard';

type Props = {};

export type CreationPlayer = Pick<Player, 'name' | 'color'>;

const CreatePlayers = (props: Props) => {
  const [players, setPlayers] = useState<Array<CreationPlayer>>([]);

  const availableColors = useMemo(() => {
    if (players.length > 0) {
      return tailwindColorList.filter(baseColor => !players.find(({ color }) => color === baseColor));
    }
    return tailwindColorList;
  }, [players]);

  const addPlayer = (p: CreationPlayer) => {
    setPlayers(prevP => prevP.concat(p));
  };

  return (
    <div>
      <PageTitle>Nuovo giocatore</PageTitle>
      <InsertNewPlayer availableColors={availableColors} addPlayer={addPlayer} />

      <div className={'mt-4 flex flex-wrap px-2 max-w-3xl mx-auto'}>
        {players.map(player => {
          return (
            <div key={player.name} className="w-full md:w-1/2 lg:w-1/3 p-2">
              <PlayerCard name={player.name} color={player.color} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreatePlayers;
