/** @format */
import { useState } from 'react';
import PageTitle from '../../common/PageTitle';
import Container from '../../common/Container';
import NewMatchStep1 from './partials/NewMatchStep1';
import NewMatchStep2 from './partials/NewMatchStep2';
import NewMatchStep3 from './partials/NewMatchStep3';
import NewMatchStep4 from './partials/NewMatchStep4';

enum Steps {
  title,
  totalPlayers,
  totalRounds,
  confirm,
}

const NewMatch = () => {
  const [step, setStep] = useState<Steps>(Steps.title);

  const onStepChange = (s: Steps) => () => {
    setStep(s);
  };

  return (
    <Container className="space-y-8">
      <PageTitle>Nuova Partita</PageTitle>
      <article className="space-y-6 text-center">
        {step === Steps.title && <NewMatchStep1 onNext={onStepChange(Steps.totalPlayers)} />}
        {step === Steps.totalPlayers && (
          <NewMatchStep2 onNext={onStepChange(Steps.totalRounds)} onPrev={onStepChange(Steps.title)} />
        )}
        {step === Steps.totalRounds && (
          <NewMatchStep3 onNext={onStepChange(Steps.confirm)} onPrev={onStepChange(Steps.totalPlayers)} />
        )}
        {step === Steps.confirm && <NewMatchStep4 onPrev={onStepChange(Steps.totalRounds)} />}
      </article>
    </Container>
  );
};

export default NewMatch;
