/** @format */

import { Player } from '../../../types';
import classNames from 'classnames';
import Coin from '../Coin';
import Card from '../Card';

type Props = {
  onClick?: () => void;
  onRemove?: () => void;
} & Partial<Player>;

const PlayerCard = ({ onRemove, onClick, name, color }: Props) => {
  return (
    <Card className={'w-[clamp(200px,100%,360px)]'}>
      <section
        className={classNames('flex gap-2 items-center px-4 py-2', { 'cursor-pointer': !!onClick })}
        onClick={onClick}
      >
        <div className={classNames('min-w-[50px] aspect-square')}>
          <Coin color={color} perspective />
        </div>
        <div className={classNames('font-semibold text-xl leading-none truncate', `text-${color}-700`)}>
          {name || 'Scegli un nome'}
        </div>
        {onRemove && (
          <button
            className={classNames(
              'flex-inline items-center justify-center ml-auto w-6 h-6 p-0 rounded-full leading-none',
              `bg-${color}-50 text-${color}-800`,
            )}
            onClick={onRemove}
          >
            X
          </button>
        )}
      </section>
    </Card>
  );
};

export default PlayerCard;
