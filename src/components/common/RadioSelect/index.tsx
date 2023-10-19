/** @format */

import classes from './radioSelect.module.scss';
import { TOption } from '../../../types';

type Props<Value extends string | number> = {
  name: string;
  options: TOption<Value>[];
  onChange: (o: TOption<Value>) => void;
};

function RadioSelect<Value extends string | number>({ name, options, onChange }: Props<Value>) {
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
}

export default RadioSelect;
