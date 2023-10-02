/** @format */

import React, { InputHTMLAttributes, memo } from 'react';
import classes from './formInput.module.scss';
import FormLabel from '../FormLabel';

type Props = {
  label?: string;
} & InputHTMLAttributes<any>;

const FormInput = memo(({ label, id, ...rest }: Props) => {
  return (
    <div className={classes.formInput}>
      {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
      <input id={id} {...rest} />
    </div>
  );
});

FormInput.displayName = 'FormInput';
export default FormInput;
