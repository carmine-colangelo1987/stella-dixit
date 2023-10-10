/** @format */
import Container from '../../common/Container';
import SelectionBoard from './partials/SelectionBoard';
import Button from '../../common/Button';
import { useState } from 'react';
import FormInput from '../../common/FormInput';

const SelectionResult = () => {
  const [stopAt, setStopAt] = useState<number>();
  const [steps, setSteps] = useState<number>(0);

  return (
    <Container>
      <SelectionBoard stopAt={stopAt} />
      <hr />
      <Button onClick={() => setStopAt(steps)}>Procedi</Button>
      <FormInput value={steps} onChange={e => setSteps(+e.target.value)} />
    </Container>
  );
};

export default SelectionResult;
