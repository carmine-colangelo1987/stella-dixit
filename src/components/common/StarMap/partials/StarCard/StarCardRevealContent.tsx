/** @format */

import { memo } from 'react';
import Star from '../../../Star';
import IconFeedback from './IconFeedback';

type Props = {
  color: string;
  matched?: boolean;
  isSuperSpark?: boolean;
  fallenCard?: boolean;
  revealable?: boolean;
  fallen?: boolean;
};

const StarCardRevealContent = memo(
  ({ color, isSuperSpark, matched, fallenCard, fallen, revealable }: Props) => {
    return (
      <>
        {!matched && !fallen && !fallenCard && (
          <aside className="flex flex-col items-center leading-none text-[0.6em] w-2/5 mx-auto">
            <Star color={color} isSuperSpark />
            <Star color={color} />
            <Star color={color} className="translate-y-[-10%]" />
          </aside>
        )}
        <IconFeedback
          color={color}
          matched={matched}
          isSuperSpark={isSuperSpark}
          fallenCard={fallenCard}
          fallen={fallen}
          revealable={revealable}
        />
      </>
    );
  },
);

StarCardRevealContent.displayName = 'StarCardRevealContent';
export default StarCardRevealContent;
