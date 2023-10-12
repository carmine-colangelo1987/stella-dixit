/** @format */
import Container from '../../common/Container';
import SelectionBoard from './partials/SelectionBoard';
import Button from '../../common/Button';
import { useState } from 'react';
import FakeCardBoard from './partials/FakeCardBoard';

const SelectionResult = () => {
  const [start, setStart] = useState(false);

  return (
    <>
      <FakeCardBoard>
        <SelectionBoard start={start} />
      </FakeCardBoard>

      <Container>
        <div className="sticky bottom-4">
          <Button className="w-full" onClick={() => setStart(true)}>
            Procedi
          </Button>
        </div>
      </Container>
    </>
  );
};

export default SelectionResult;
