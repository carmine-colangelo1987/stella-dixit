/** @format */

import { memo } from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { AppIconName, AppIconsLibrary } from '../../../fontawesome/FonticonProvider';

type Props = {
  icon: AppIconName;
} & Omit<FontAwesomeIconProps, 'icon'>;

const Icon = memo(({ className, icon, ...rest }: Props) => {
  const iconDefinition = AppIconsLibrary[icon];
  return <FontAwesomeIcon icon={iconDefinition} className={className} {...rest} />;
});

Icon.displayName = 'Icon';
export default Icon;
