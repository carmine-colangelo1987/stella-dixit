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
} from '@fortawesome/free-solid-svg-icons';

const lib = {
  'check-square': faCheckSquare,
  coffee: faCoffee,
  'rotate-forward': faRotateForward,
  'rotate-backward': faRotateBackward,
  spinner: faSpinner,
  'arrow-rotate-backward': faArrowRotateBackward,
  'arrow-rotate-forward': faArrowRotateForward,
  'flag-checkered': faFlagCheckered,
};

export type AppIconName = keyof typeof lib;

library.add(...Object.values(lib));

const FonticonProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default FonticonProvider;
