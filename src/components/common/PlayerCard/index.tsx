/** @format */

import { Player } from '../../../types';
import classNames from 'classnames';

type Props = {
  onClick?: () => void;
  onRemove?: () => void;
} & Partial<Player>;

const PlayerCard = ({ onRemove, onClick, name, color }: Props) => {
  return (
    <div className={'rounded-3xl border border-slate-200 p-4 bg-white'} onClick={onClick}>
      <section className={'flex gap-2 items-center'}>
        <div
          className={classNames(
            'shadow-md flex items-center justify-center rounded-full capitalize text-xl text-white font-bold w-10 aspect-square',
            `bg-${color}-500`,
          )}
        >
          {name?.charAt(0)}
        </div>
        <div>
          <div className={classNames('font-semibold text-lg leading-none', `text-${color}-700`)}>
            {name || 'Scegli un nome'}
          </div>
          <span className={'text-sm leading-none text-black text-opacity-50'}>
            {color || 'Scegli un colore...'}
          </span>
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
