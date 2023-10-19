/** @format */

import { memo } from 'react';
import classNames from 'classnames';
import classes from './starCard.module.scss';
import { MatchedCard, RoundPhase } from '../../../../../types';
import { useAppSelector } from '../../../../../hooks/useStore';
import StarCardRevealContent from './partials/StarCardRevealContent';

type StarCardSelected = {
  id: string;
  color: string;
  selected?: boolean;
  disabled?: boolean;
  revealed?: boolean;
  matched?: MatchedCard;
  onClick: (id: string) => void;
  variant: Extract<RoundPhase, 'ASSOCIATION' | 'REVEAL'>;
};

const StarCard = memo(
  ({ id, variant, color, selected, revealed, matched, disabled, onClick }: StarCardSelected) => {
    const isCurrentCard = useAppSelector(s => s.roundDataReducer.currentRevealedCard === id);
    const dark = useAppSelector(s => s.roundDataReducer.dark);
    const fallen = useAppSelector(s => s.roundDataReducer.fallen);
    const fallenCard = useAppSelector(s => s.roundDataReducer.fallenCard === id);
    const selectedCard = variant === 'ASSOCIATION' && selected;
    const revealable = variant === 'REVEAL' && selected && !revealed;
    const unclickable = disabled || fallen || (variant === 'REVEAL' && !revealable);
    const isFallenInDark = fallen && dark;
    console.log(isFallenInDark);

    return (
      <button
        disabled={unclickable}
        className={classNames(classes.card, {
          selected: selectedCard,
          revealable,
          disabled,
          revealed,
          matched: !!matched,
          superSpark: matched?.isSuperSpark,
          fallenCard,
          isCurrentCard,
          fallen,
        })}
        onClick={() => onClick(id)}
      >
        {selected && variant === 'ASSOCIATION' && (
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 27.502 31.312"
          >
            <g transform="translate(1235.3 -50.718)">
              <path
                d="m-1214.8 77.118c0.3302 0.2794 0.5842 0.4572 0.762 0.4826s0.3556-0.0254 0.5334-0.2032c0.2032-0.1778 0.254-0.4064 0.1524-0.6096-0.1016-0.254-0.4064-0.635-0.9144-1.1938-0.4318-0.4572-1.2954-1.5494-2.5654-3.2258-1.2954-1.7272-2.5908-3.4544-3.8862-5.2324-0.3048-0.381-0.4572-0.6604-0.4826-0.762-0.025-0.1524 0.025-0.3556 0.1778-0.635 0.2032-0.4064 1.016-1.8034 2.4892-4.191 1.4478-2.3876 2.3368-3.81 2.667-4.2418 0.254-0.3302 0.381-0.5842 0.4064-0.6858 0-0.1524-0.051-0.3302-0.1778-0.5842-0.1524-0.3302-0.3302-0.4826-0.508-0.5334-0.2032 0-0.4318 0.1016-0.6858 0.381-0.2286 0.2032-0.889 1.143-2.0066 2.8702-1.1176 1.6764-2.032 3.0988-2.6924 4.2164-0.254 0.381-0.4572 0.7366-0.6604 1.016s-0.3302 0.4318-0.381 0.4572c-0.127 0.0254-0.5334-0.381-1.1938-1.2192-0.6858-0.8382-1.4224-1.8288-2.1844-2.921-0.7874-1.0922-1.3462-1.9558-1.6764-2.5908-0.4318-0.7874-0.7112-1.2954-0.8636-1.4732s-0.3556-0.2794-0.6096-0.2794c-0.4064 0-0.635 0.1524-0.635 0.4318s0.1778 0.8382 0.5842 1.651c0.4064 0.8382 0.8128 1.5748 1.27 2.2352 0.4318 0.6604 1.27 1.8034 2.54 3.429l1.9304 2.4892-1.524 2.4892c-1.016 1.651-2.0066 3.2258-3.0226 4.7752-0.4318 0.6604-0.7874 1.2446-1.0668 1.7526-0.3048 0.508-0.4318 0.8128-0.4064 0.889 0.1016 0.508 0.4318 0.762 0.9906 0.762 0.1016 0 0.2032-0.0254 0.3048-0.0762s0.2286-0.2032 0.4318-0.4064c0.2032-0.254 0.4064-0.5334 0.6604-0.9144l1.0668-1.6256c1.2954-2.032 2.2098-3.5052 2.7432-4.4196 0.5334-0.889 0.8636-1.3462 0.9652-1.3462 0.2032-0.0254 1.4732 1.5494 3.81 4.6736 1.143 1.5494 1.9304 2.5654 2.3368 3.0734 0.4064 0.4572 0.8382 0.9144 1.3208 1.2954z"
                strokeWidth=".26458"
              />
            </g>
          </svg>
        )}
        {selected && variant === 'REVEAL' && (
          <StarCardRevealContent
            color={color}
            isSuperSpark={matched?.isSuperSpark}
            revealable={revealable}
            fallenCard={fallenCard}
            fallen={fallen}
            matched={!!matched}
          />
        )}
        <div className={classes.backFace} />
      </button>
    );
  },
);

StarCard.displayName = 'StarCard';
export default StarCard;
