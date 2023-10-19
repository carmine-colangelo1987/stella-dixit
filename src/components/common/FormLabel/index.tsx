/** @format */

import { memo, PropsWithChildren } from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
  htmlFor?: string;
};

const FormLabel = memo(({ className, htmlFor, children }: PropsWithChildren<Props>) => {
  return (
    <label className={classNames('block text-sm font-medium mb-4', className)} htmlFor={htmlFor}>
      {children}
    </label>
  );
});

FormLabel.displayName = 'FormLabel';
export default FormLabel;
