/** @format */

import classes from './radioSelect.module.scss';
import { TOption } from '../../../types';
import FormLabel from '../FormLabel';

type Props<Value extends string | number> = {
  name: string;
  options: TOption<Value>[];
  onChange: (o: TOption<Value>) => void;
  label?: string;
};

function RadioSelect<Value extends string | number>({ name, label, options, onChange }: Props<Value>) {
  return (
    <div>
      {label && <FormLabel>{label}</FormLabel>}
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
    </div>
  );
}

export default RadioSelect;
