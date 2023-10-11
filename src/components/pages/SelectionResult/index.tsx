/** @format */
import Container from '../../common/Container';
import SelectionBoard from './partials/SelectionBoard';
import Button from '../../common/Button';
import { useState } from 'react';

const SelectionResult = () => {
  const [start, setStart] = useState(false);

  return (
    <Container>
      <SelectionBoard start={start} />
      <hr className="my-4" />
      <Button className="w-full" onClick={() => setStart(true)}>
        Procedi
      </Button>
    </Container>
  );
};

export default SelectionResult;
