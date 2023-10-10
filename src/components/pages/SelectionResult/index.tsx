/** @format */
import Container from '../../common/Container';
import SelectionBoard from './partials/SelectionBoard';
import Button from '../../common/Button';
import { useState } from 'react';

type Props = {};

const SelectionResult = (props: Props) => {
  const [stopAt, setStopAt] = useState<number>();

  return (
    <Container>
      <SelectionBoard stopAt={stopAt} />
      <hr />
      <Button onClick={() => setStopAt(8)}>Procedi</Button>
    </Container>
  );
};

export default SelectionResult;
