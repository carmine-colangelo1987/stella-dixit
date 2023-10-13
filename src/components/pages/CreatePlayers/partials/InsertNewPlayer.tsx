/** @format */

import { memo, useState } from 'react';
import Button from '../../../common/Button';
import FormInput from '../../../common/FormInput';
import PlayerCard from '../../../common/PlayerCard';
import FormLabel from '../../../common/FormLabel';
import Card from '../../../common/Card';
import Container from '../../../common/Container';
import { CreationPlayer } from '../../../../types';
import Coin from '../../../common/Coin';

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
    <>
      <section className="bg-gray-50">
        <Container className="py-4">
          <Card className="p-4">
            <form className="flex flex-col space-y-4">
              <section>
                <FormInput
                  label="Inserisci il nome o il nickname del giocatore"
                  placeholder="Nome / Nickname"
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </section>

              <hr className={'my-4'} />
              <section>
                <FormLabel className={'mb-2'}>Scegli il colore</FormLabel>
                <div className="flex gap-2 flex-wrap">
                  {availableColors.map(c => (
                    <button
                      type="button"
                      key={c}
                      title={c}
                      onClick={() => setColor(_c => (c === _c ? '' : c))}
                      className={`w-12 aspect-sqare rounded-full ${color === c ? 'active' : ''}`}
                    >
                      <Coin color={c} />
                    </button>
                  ))}
                </div>
              </section>

              <hr className={'my-4'} />
              <Button type="submit" disabled={!color || !name} onClick={onConfirm}>
                Conferma
              </Button>
            </form>
          </Card>
        </Container>
      </section>

      {name && (
        <section className={'bg-gray-50 p-4 sticky bottom-0'}>
          <Container>
            <PlayerCard name={name} color={color} />
          </Container>
        </section>
      )}
    </>
  );
});

InsertNewPlayer.displayName = 'InsertNewPlayer';
export default InsertNewPlayer;
