/** @format */

import { memo } from 'react';
import classes from './radioSelect.module.scss';

type TOption = { id: string; value: string | number };

type Props = {
  name: string;
  options: TOption[];
  onChange: (o: TOption) => void;
};

const RadioSelect = memo(({ name, options, onChange }: Props) => {
  return (
    <div className={classes.list}>
      {options.map(o => {
        return (
          <label key={o.id} className={classes.option}>
            {o.value}
            <input name={name} type="radio" className="absolute opacity-0" onChange={() => onChange(o)} />
          </label>
        );
      })}
    </div>
  );
});

RadioSelect.displayName = 'RadioSelect';
export default RadioSelect;
