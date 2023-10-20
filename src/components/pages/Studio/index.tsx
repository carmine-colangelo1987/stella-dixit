/** @format */

import PlayerCard from '../../common/PlayerCard';

type Props = {};

const Studio = (props: Props) => {
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        <PlayerCard name={'Mino'} color={'teal'} onRemove={() => console.log('')} />
        <PlayerCard name={'Elisa'} color={'gray'} onRemove={() => console.log('')} />
        <PlayerCard name={'Ilaria'} color={'rose'} onRemove={() => console.log('')} />
        <PlayerCard name={'Bizio'} color={'blue'} onRemove={() => console.log('')} />
        <PlayerCard name={'Dario'} color={'red'} onRemove={() => console.log('')} />
        <PlayerCard name={'Serena'} color={'green'} onRemove={() => console.log('')} />
        <PlayerCard name={'Maschio'} color={'sky'} onRemove={() => console.log('')} />
        <PlayerCard name={'Giuliana'} color={'amber'} onRemove={() => console.log('')} />
      </div>
    </div>
  );
};

export default Studio;
