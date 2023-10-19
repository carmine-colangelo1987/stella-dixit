/** @format */

import { memo, useMemo } from 'react';
import Icon from '../../../Icon';
import classNames from 'classnames';
import classes from './iconFeedback.module.scss';
import { useAppSelector } from '../../../../../hooks/useStore';

type Props = {
  color: string;
  matched?: boolean;
  isSuperSpark?: boolean;
  fallenCard?: boolean;
  revealable?: boolean;
  fallen?: boolean;
};

const IconFeedback = memo(({ color, matched, isSuperSpark, fallenCard, fallen, revealable }: Props) => {
  const rotation = useAppSelector(s => s.uiDataReducer.starMapLastRotation ?? 0);
  const icon = useMemo(() => {
    if (isSuperSpark) {
      return <Icon icon={'check-double'} />;
    }
    if (matched) {
      return <Icon icon={'check'} />;
    }
    if (fallenCard) {
      return <Icon icon={'person-falling'} />;
    }
    if (revealable && fallen) {
      return <Icon icon={'eye'} />;
    }
  }, [isSuperSpark, matched, fallenCard, fallen, revealable]);

  if (!icon) {
    return null;
  }

  const rotationValue = revealable && fallen ? rotation : -rotation;

  return (
    <div
      className={classNames(classes.iconWrap, [revealable && fallen ? `text-${color}-400` : 'text-white'])}
    >
      <div
        className="w-full aspect-square transition-base"
        style={{ transform: `rotate(${rotationValue}deg)` }}
      >
        {icon}
      </div>
    </div>
  );
});

IconFeedback.displayName = 'IconFeedback';
export default IconFeedback;
