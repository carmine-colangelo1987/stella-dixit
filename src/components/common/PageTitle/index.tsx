/** @format */

import { memo, PropsWithChildren } from 'react';

type Props = {};

const PageTitle = memo(({ children }: PropsWithChildren<Props>) => {
  return <h1>{children}</h1>;
});

PageTitle.displayName = 'PageTitle';
export default PageTitle;
