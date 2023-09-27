import React, {FormEventHandler, useState} from 'react';
import './App.scss';
import FormInput from "./common/FormInput";
import {useLazyCreateNewMatchQuery} from "../store/api/match";

type User = {
  id: string;
  name: string;
  color: string;
  points: number;
}
type FormProva = {
  title: string
  users: Array<Pick<User, 'name' | 'color'>>;
}

function App() {
  const [form, setForm] = useState<FormProva>();

  const [trigger] = useLazyCreateNewMatchQuery();

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const match = {
      title: 'Suca',
      users: ['mino', 'elisa', 'gianni', 'marco', 'marcoZ', 'pascoletti', 'elisaM'].map(name => ({
        name,
        color: `#${Math.trunc(Math.random() * 1000000)}`.padEnd(6, '000000')
      }))
    }
    trigger(match).then(r => console.log(r))
  }

  return (
    <div className="bg-teal-300">
      <form className="w-full max-w-lg" onSubmit={onSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <FormInput label={'Nome del Match'} value={'Prova prova'} />
        </div>
        <button type={'submit'}>Prova</button>
      </form>
      <code className="bg-black">
        <pre>{JSON.stringify(form)}</pre>
      </code>

    </div>
  );
}

export default App;
