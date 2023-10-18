/** @format */

import classes from './starMap.module.scss';
import classNames from 'classnames';
import RotationToolbar from '../RotationToolbar';
import MiniMap from './partials/MiniMap';
import StarCard from './partials/StarCard';
import { useAppSelector } from '../../../hooks/useStore';
import { MatchedCard, RoundPhase } from '../../../types';

type StarMapProps = {
  variant?: Extract<RoundPhase, 'ASSOCIATION' | 'REVEAL'>;
  cardsList: {
    id: string;
    selected?: boolean;
    disabled?: boolean;
    revealed?: boolean;
    matched?: MatchedCard;
  }[];
  onClickCardHandler: (id: string) => void;
};

const StarMap = ({ variant = 'ASSOCIATION', cardsList, onClickCardHandler }: StarMapProps) => {
  const playerColor = useAppSelector(s => s.playerDataReducer?.player?.color ?? 'orange');
  const hasCurrentCard = useAppSelector(s => s.roundDataReducer.currentRevealedCard != null);

  return (
    <div className={classNames('py-4', { hasCurrentCard })}>
      <RotationToolbar>
        <MiniMap color={playerColor}>
          <div className={classNames(classes.grid, variant)}>
            {cardsList.map(props => (
              <StarCard
                key={props.id}
                color={playerColor}
                variant={variant}
                onClick={onClickCardHandler}
                {...props}
              />
            ))}
          </div>
        </MiniMap>
      </RotationToolbar>
    </div>
  );
};

export default StarMap;
