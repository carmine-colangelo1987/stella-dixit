/** @format */

import { memo } from 'react';
import classNames from 'classnames';
import Coin from '../../../../common/Coin';

type Props = {
  color: string;
  disabled?: boolean;
  active?: boolean;
  onClick: () => void;
};

const ButtonColorCoin = memo(({ color, disabled, active, onClick }: Props) => {
  return (
    <button
      type="button"
      title={color}
      onClick={onClick}
      className={classNames('w-12 aspect-sqare rounded-full transition-base', {
        'opacity-40': disabled,
        'translate-y[-10px] scale-[1.15]': active,
      })}
      disabled={disabled}
    >
      <Coin color={color} perspective={active} />
    </button>
  );
});

ButtonColorCoin.displayName = 'ButtonColorCoin';
export default ButtonColorCoin;
