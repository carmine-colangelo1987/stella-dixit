/** @format */

import { Player } from '../../../types';
import classNames from 'classnames';
import Coin from '../Coin';

type Props = {
  onClick?: () => void;
  onRemove?: () => void;
} & Partial<Player>;

const PlayerCard = ({ onRemove, onClick, name, color }: Props) => {
  return (
    <div className={'rounded-3xl border border-slate-200 p-4 bg-white'} onClick={onClick}>
      <section className={'flex gap-2 items-center'}>
        <div className={classNames('w-14 aspect-square')}>
          <Coin color={color} perspective />
        </div>
        <div>
          <div className={classNames('font-semibold text-xl leading-none', `text-${color}-700`)}>
            {name || 'Scegli un nome'}
          </div>
        </div>
        {onRemove && (
          <button className={'ml-auto'} onClick={onRemove}>
            X
          </button>
        )}
      </section>
    </div>
  );
};

export default PlayerCard;
