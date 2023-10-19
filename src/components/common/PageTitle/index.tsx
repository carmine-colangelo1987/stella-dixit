/** @format */

import { memo, PropsWithChildren } from 'react';

type Props = {
  subtitle?: string;
  description?: string;
};

const PageTitle = memo(({ subtitle, description, children }: PropsWithChildren<Props>) => {
  return (
    <div className="space-y-4 mt-4 mb-8 text-center">
      <h1 className="text-4xl font-extrabold text-primary leading-none tracking-tight md:text-5xl lg:text-6xl">
        {children}
      </h1>
      {subtitle && (
        <h2 className="font-bold text-secondary leading-none tracking-tight text-xl md:text-2xl lg:text-3xl">
          {subtitle}
        </h2>
      )}
      {description && <p>{description}</p>}
    </div>
  );
});

PageTitle.displayName = 'PageTitle';
export default PageTitle;
