/** @format */

import { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppIconName } from '../../../fontawesome/FonticonProvider';

type Props = {
  className?: string;
  icon: AppIconName;
};

const Icon = memo(({ className, icon }: Props) => <FontAwesomeIcon icon={icon} className={className} />);

Icon.displayName = 'Icon';
export default Icon;
