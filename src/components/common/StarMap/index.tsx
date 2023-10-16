/** @format */

import classes from './starMap.module.scss';
import classNames from 'classnames';
import RotationToolbar from '../RotationToolbar';
import MiniMap from './partials/MiniMap';
import StarCard from './partials/StarCard';
import { useAppSelector } from '../../../hooks/useStore';
import { RoundPhase } from '../../../types';

type StarMapProps = {
  variant?: Extract<RoundPhase, 'ASSOCIATION' | 'REVEAL'>;
  cardsList: {
    id: string;
    selected?: boolean;
    disabled?: boolean;
    revealed?: boolean;
    matched?: boolean;
    unmatched?: boolean;
  }[];
  onClickCardHandler: (id: string) => void;
};

const StarMap = ({ variant = 'ASSOCIATION', cardsList, onClickCardHandler }: StarMapProps) => {
  const playerColor = useAppSelector(s => s.playerDataReducer?.player?.color ?? 'orange');

  return (
    <div className="py-4">
      <RotationToolbar>
        <MiniMap color={playerColor}>
          <div className={classNames(classes.grid)}>
            {cardsList.map(props => (
              <StarCard key={props.id} variant={variant} onClick={onClickCardHandler} {...props} />
            ))}
          </div>
        </MiniMap>
      </RotationToolbar>
    </div>
  );
};

export default StarMap;
