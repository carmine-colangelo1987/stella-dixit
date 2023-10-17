/** @format */

import { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppIconName, AppIconsLibrary } from '../../../fontawesome/FonticonProvider';

type Props = {
  className?: string;
  icon: AppIconName;
};

const Icon = memo(({ className, icon }: Props) => {
  const iconDefinition = AppIconsLibrary[icon];
  return <FontAwesomeIcon icon={iconDefinition} className={className} />;
});

Icon.displayName = 'Icon';
export default Icon;
