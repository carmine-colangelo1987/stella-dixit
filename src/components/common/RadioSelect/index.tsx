/** @format */

import classes from './radioSelect.module.scss';
import { TOption } from '../../../types';
import FormLabel from '../FormLabel';

type Props<Value extends string | number> = {
  name: string;
  options: TOption<Value>[];
  onChange: (o: TOption<Value>) => void;
  label?: string;
  selected?: Value;
};

function RadioSelect<Value extends string | number>({
  name,
  label,
  selected,
  options,
  onChange,
}: Props<Value>) {
  return (
    <div className="max-w-xs mx-auto">
      {label && <FormLabel>{label}</FormLabel>}
      <div className={classes.list}>
        {options.map(o => {
          return (
            <label key={o.id} className={classes.option}>
              {o.value}
              <input
                name={name}
                value={o.value}
                checked={selected === o.value}
                type="radio"
                className="absolute opacity-0"
                onChange={() => onChange(o)}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default RadioSelect;
