/** @format */

import { memo } from 'react';
import Icon from '../Icon';

type Props = {};

const Loader = memo((props: Props) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <Icon icon={'spinner'} />
      <span>Loading...</span>
    </div>
  );
});

Loader.displayName = 'Loader';
export default Loader;
