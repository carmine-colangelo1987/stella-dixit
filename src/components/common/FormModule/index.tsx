/** @format */

import { FormEventHandler } from 'react/index';
import { PropsWithChildren } from 'react';
import Button from '../Button';
import Card from '../Card';

type Props = {
  onSubmit?: FormEventHandler<HTMLFormElement>;
  onReset?: () => void;
  submitLabel?: string;
  resetLabel?: string;
};

const FormModule = ({
  onSubmit,
  onReset,
  submitLabel = 'Avanti',
  resetLabel = 'Indietro',
  children,
}: PropsWithChildren<Props>) => {
  return (
    <Card className="max-w-xl mx-auto p-4 lg:p-8">
      <form className="flex flex-col gap-8" onSubmit={onSubmit} onReset={onReset}>
        <section className="w-full min-h-[30vh] flex items-center justify-center">
          <div className="w-full">{children}</div>
        </section>
        <footer className="w-full flex gap-4">
          {onReset && (
            <Button className="mr-auto flex-1" type="reset" variant="neutral">
              {resetLabel}
            </Button>
          )}
          {onSubmit && (
            <Button type="submit" className="flex-1 ml-auto">
              {submitLabel}
            </Button>
          )}
        </footer>
      </form>
    </Card>
  );
};

export default FormModule;
