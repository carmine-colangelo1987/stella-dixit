/** @format */

import { PropsWithChildren } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheckSquare,
  faCoffee,
  faRotateForward,
  faRotateBackward,
  faFlagCheckered,
  faSpinner,
  faArrowRotateBackward,
  faArrowRotateForward,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as regularFaStar } from '@fortawesome/free-regular-svg-icons';

export const AppIconsLibrary = {
  'check-square': faCheckSquare,
  coffee: faCoffee,
  'rotate-forward': faRotateForward,
  'rotate-backward': faRotateBackward,
  spinner: faSpinner,
  'arrow-rotate-backward': faArrowRotateBackward,
  'arrow-rotate-forward': faArrowRotateForward,
  'flag-checkered': faFlagCheckered,
  'star-solid': faStar,
  star: regularFaStar,
};

export type AppIconName = keyof typeof AppIconsLibrary;

console.log(AppIconsLibrary);

library.add(...Object.values(AppIconsLibrary));

/**
 * @see https://fontawesome.com/search
 */

const FonticonProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default FonticonProvider;
