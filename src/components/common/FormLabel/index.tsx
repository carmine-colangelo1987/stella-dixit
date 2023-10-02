/** @format */

import { memo, PropsWithChildren } from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
  htmlFor?: string;
};

const FormLabel = memo(({ className, htmlFor, children }: PropsWithChildren<Props>) => {
  return (
    <label className={classNames('block text-sm font-medium', className)} htmlFor={htmlFor}>
      {children}
    </label>
  );
});

FormLabel.displayName = 'FormLabel';
export default FormLabel;
