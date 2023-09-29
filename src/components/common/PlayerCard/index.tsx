/** @format */

import { Player } from '../../../types';

type Props = Partial<Player>;

const PlayerCard = ({ name, color }: Props) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow hover:shadow-lg bg-white">
      <section className={`w-full bg-${color}-600 aspect-square relative px-8`}>
        <div className="w-1/3 absolute left-1/2 translate-x-[-50%] bottom-[-5%] z-10">
          <div
            className={`flex items-center justify-center rounded-full capitalize text-3xl font-bold w-full aspect-square bg-${color}-300`}
          >
            {name?.charAt(0)}
          </div>
        </div>
      </section>
      <section className="px-6 py-4">
        <div className="font-bold text-xl">{name}</div>
      </section>
    </div>
  );
};

export default PlayerCard;
