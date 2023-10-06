/** @format */

import Container from '../../common/Container';
import StarMap from '../../common/StarMap';

type Props = {};

const RoundSelection = (props: Props) => {
  return (
    <div className="overflow-hidden">
      <Container>
        <StarMap />
      </Container>
    </div>
  );
};

export default RoundSelection;
