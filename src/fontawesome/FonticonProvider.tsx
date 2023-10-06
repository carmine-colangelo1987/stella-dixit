/** @format */

import { PropsWithChildren } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheckSquare,
  faCoffee,
  faRotateForward,
  faRotateBackward,
  faArrowRotateBackward,
  faArrowRotateForward,
} from '@fortawesome/free-solid-svg-icons';

const lib = {
  'check-square': faCheckSquare,
  coffee: faCoffee,
  'rotate-forward': faRotateForward,
  'rotate-backward': faRotateBackward,
  'arrow-rotate-backward': faArrowRotateBackward,
  'arrow-rotate-forward': faArrowRotateForward,
};

export type AppIconName = keyof typeof lib;

library.add(...Object.values(lib));

const FonticonProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default FonticonProvider;
