/** @format */

import Button from '../../common/Button';
import Coin from '../../common/Coin';
import { useState } from 'react';
import { tailwindColorList } from '../../../utils/tailwindColors';

type Props = {};

const Studio = (props: Props) => {
  const [dark, setDark] = useState(false);
  const [perspective, setPerspective] = useState(false);
  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {tailwindColorList.map(c => (
          <div className="w-20" key={c}>
            <Coin color={c} dark={dark} perspective={perspective} />
          </div>
        ))}
      </div>
      <Button onClick={() => setDark(d => !d)}>dark</Button>
      <Button onClick={() => setPerspective(d => !d)}>perspective</Button>
    </div>
  );
};

export default Studio;
