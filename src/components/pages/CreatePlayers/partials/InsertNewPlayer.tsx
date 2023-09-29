/** @format */

import { memo, useState } from 'react';
import { CreationPlayer } from '../index';

type Props = {
  availableColors: string[];
  addPlayer: (p: CreationPlayer) => void;
};

const InsertNewPlayer = memo(({ availableColors, addPlayer }: Props) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  const reset = () => {
    setName('');
    setColor('');
  };

  const onConfirm = () => {
    addPlayer({ name, color });
    reset();
  };

  return (
    <div className="flex flex-col space-y-4">
      <input
        placeholder="Inserisci il nome o il nickname del giocatore"
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <div className="flex gap-2 flex-wrap">
        {availableColors.map(c => (
          <button
            key={c}
            title={c}
            onClick={() => setColor(_c => (c === _c ? '' : c))}
            className={`w-12 h-12 rounded-full bg-${c}-600 ${color === c ? 'active' : ''}`}
          />
        ))}
      </div>
      <button disabled={!color || !name} onClick={onConfirm}>
        Conferma
      </button>
    </div>
  );
});

InsertNewPlayer.displayName = 'InsertNewPlayer';
export default InsertNewPlayer;
