/** @format */

import { useState } from 'react';

type Props = {};

const CreatePlayers = (props: Props) => {
  const [players, setPlayers] = useState([]);

  return (
    <div>
      <h1>Nuovo giocatore</h1>
      <input type="text" />

      <hr />
    </div>
  );
};

export default CreatePlayers;
