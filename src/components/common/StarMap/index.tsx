/** @format */

import { plancia } from '../../../constants/plancia';
import classes from './starMap.module.scss';
import classNames from 'classnames';
import RotationToolbar from '../RotationToolbar';
import MiniMap from './partials/MiniMap';
import StarCard from './partials/StarCard';
import { useAppSelector } from '../../../hooks/useStore';
import { useRoundSelectedCard } from '../../../hooks/useRoundSelectedCard';

const StarMap = () => {
  const playerColor = useAppSelector(s => s.playerDataReducer?.player?.color ?? 'orange');
  const [selected, onToggleSelection] = useRoundSelectedCard();

  const isSelectedCard = (id: string) => selected.includes(id);

  const disableUnselectedCards = selected.length >= 10;

  const counter = selected.length === 1 ? 'carta' : 'carte';

  return (
    <div className="py-4">
      <p className="text-center">
        Hai selezionato {selected.length} {counter}
        <small className="text-sm block text-slate-400">non puoi selezionare più di 10 carte!</small>
      </p>
      <RotationToolbar>
        <MiniMap color={playerColor}>
          <div className={classNames(classes.grid)}>
            {plancia.map(id => {
              const sel = isSelectedCard(id);
              return (
                <StarCard
                  key={id}
                  disabled={!sel && disableUnselectedCards}
                  id={id}
                  selected={sel}
                  onClick={onToggleSelection}
                />
              );
            })}
          </div>
        </MiniMap>
      </RotationToolbar>
    </div>
  );
};

export default StarMap;
