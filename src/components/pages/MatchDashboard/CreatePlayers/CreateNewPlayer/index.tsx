/** @format */

import { memo, useState } from 'react';
import Container from '../../../../common/Container';
import CreateNewPlayerStep1 from './partials/CreateNewPlayerStep1';
import CreateNewPlayerStep2 from './partials/CreateNewPlayerStep2';
import CreateNewPlayerStep3 from './partials/CreateNewPlayerStep3';

enum Steps {
  chooseName,
  chooseColor,
  confirm,
}

const CreateNewPlayer = memo(() => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [step, setStep] = useState<Steps>(Steps.chooseName);

  const onStepChange = (s: Steps) => () => {
    setStep(s);
  };

  return (
    <>
      <section className="bg-gray-50">
        <Container className="py-4">
          <article className="space-y-6 text-center">
            {step === Steps.chooseName && (
              <CreateNewPlayerStep1 name={name} setName={setName} onNext={onStepChange(Steps.chooseColor)} />
            )}

            {step === Steps.chooseColor && (
              <CreateNewPlayerStep2
                color={color}
                setColor={setColor}
                onNext={onStepChange(Steps.confirm)}
                onPrev={onStepChange(Steps.chooseName)}
              />
            )}

            {step === Steps.confirm && (
              <CreateNewPlayerStep3 name={name} color={color} onPrev={onStepChange(Steps.chooseColor)} />
            )}
          </article>
        </Container>
      </section>
    </>
  );
});

CreateNewPlayer.displayName = 'CreateNewPlayer';
export default CreateNewPlayer;
