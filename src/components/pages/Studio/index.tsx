/** @format */

import ResultsBoard from '../../common/ResultsBoard';
import { tailwindColorList, tailwindColorTones } from '../../../utils/tailwindColors';

type Props = {};

const Studio = (props: Props) => {
  return (
    <div>
      <ResultsBoard />
      <div className="flex flex-wrap gap-4">
        {tailwindColorList.map(color => {
          return (
            <div className="flex flex-wrap gap-2">
              {tailwindColorTones.map(tone => (
                <div className={`bg-${color}-${tone} p-2`}>
                  {color}-{tone}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Studio;
