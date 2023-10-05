/** @format */

import { plancia } from '../../../constants/plancia';
import classes from './cardTable.module.scss';
import { useState } from 'react';
import classNames from 'classnames';

const CardTable = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [rotation, setRotation] = useState(0);

  const isSelectedCard = (id: string) => selected.includes(id);

  const onToggleSelection = (id: string) => () => {
    setSelected(prev => {
      if (prev.find(sId => id === sId)) {
        return prev.filter(sId => id !== sId);
      }
      return prev.concat(id);
    });
  };

  const rotate = (negative?: boolean) => () => {
    const add = negative ? -90 : 90;
    setRotation(p => p + add);
  };

  return (
    <div className="pt-4 pb-8">
      <section className={classes.toolbar}>
        <button onClick={rotate()}>Ruota a dx</button>
        <button onClick={rotate(true)}>Ruota a sx</button>
        <p>
          Hai selezionato {selected.length} {selected.length === 1 ? 'carta' : 'carte'}
        </p>
      </section>

      <div className={classNames(classes.wrapper)} style={{ transform: `rotate(${rotation}deg)` }}>
        <aside className={classes.moonContainer}>
          <span className={classes.moon} />
        </aside>
        <div className={classNames(classes.table)}>
          {plancia.map(id => {
            return (
              <button
                key={id}
                className={classNames(classes.card, { selected: isSelectedCard(id) })}
                onClick={onToggleSelection(id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardTable;
